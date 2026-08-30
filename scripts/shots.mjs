/**
 * Responsive checker for kauelima.com.
 *
 * Walks every route at mobile and desktop against the running dev server and
 * fails on the things that actually break a bold-typography site:
 *   1. horizontal overflow (oversized display type escaping the viewport)
 *   2. console errors / failed requests
 *   3. tap targets under 44px on mobile
 *
 * Screenshots land in .shots/ (gitignored) for visual review.
 *
 *   npm run shots                    # default routes, both viewports
 *   npm run shots -- /design /about  # only these routes
 *   npm run shots -- --sweep         # all five widths
 */
import { chromium } from 'playwright';
import { mkdir, rm, writeFile } from 'node:fs/promises';

const BASE = process.env.SHOTS_BASE ?? 'http://localhost:4321';
const OUT = '.shots';

const DEFAULT_ROUTES = [
  '/',
  '/design',
  '/product',
  '/about',
  '/contact',
  '/design/jam-family-calendar',
  '/product/jam-family-calendar',
];

const PRIMARY = [
  { name: 'mobile', width: 390, height: 844, isMobile: true },
  { name: 'desktop', width: 1440, height: 900, isMobile: false },
];

const SWEEP = [
  { name: '375', width: 375, height: 812, isMobile: true },
  { name: '768', width: 768, height: 1024, isMobile: true },
  { name: '1024', width: 1024, height: 768, isMobile: false },
  { name: '1440', width: 1440, height: 900, isMobile: false },
  { name: '2560', width: 2560, height: 1440, isMobile: false },
];

const argv = process.argv.slice(2);
const sweep = argv.includes('--sweep');
const routeArgs = argv.filter((a) => a.startsWith('/'));
const routes = routeArgs.length ? routeArgs : DEFAULT_ROUTES;
const viewports = sweep ? SWEEP : PRIMARY;

const failures = [];
const skipped = [];

const slug = (r) => (r === '/' ? 'home' : r.replace(/^\//, '').replace(/\//g, '-'));

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
    isMobile: vp.isMobile,
    hasTouch: vp.isMobile,
    userAgent: vp.isMobile
      ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
      : undefined,
  });

  for (const route of routes) {
    const page = await context.newPage();
    const problems = [];

    page.on('console', (m) => {
      if (m.type() === 'error') problems.push(`console: ${m.text().slice(0, 200)}`);
    });
    page.on('pageerror', (e) => problems.push(`pageerror: ${e.message.slice(0, 200)}`));
    page.on('requestfailed', (r) => {
      const err = r.failure()?.errorText ?? '';
      if (err.includes('ERR_ABORTED')) return; // navigation cancels, not real failures
      problems.push(`request failed: ${r.url().slice(0, 120)} (${err})`);
    });

    let res;
    try {
      res = await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 20000 });
    } catch (e) {
      failures.push(`${route} @ ${vp.name}: navigation failed — ${e.message.split('\n')[0]}`);
      await page.close();
      continue;
    }

    if (!res || res.status() >= 400) {
      const status = res ? res.status() : 'no response';
      if (status === 404) {
        skipped.push(`${route} @ ${vp.name}: 404 (route not built yet)`);
      } else {
        failures.push(`${route} @ ${vp.name}: HTTP ${status}`);
      }
      await page.close();
      continue;
    }

    // The Astro dev toolbar is dev-only chrome; keep it out of review shots
    // and out of the tap-target audit.
    await page.addStyleTag({ content: 'astro-dev-toolbar{display:none!important}' });

    // Fonts settled before measuring or shooting.
    await page.evaluate(() => document.fonts?.ready);

    // --- 1. horizontal overflow -------------------------------------------
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      const over = doc.scrollWidth - doc.clientWidth;
      if (over <= 1) return null;
      const vw = doc.clientWidth;
      const guilty = [];
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        if (r.right > vw + 1 || r.left < -1) {
          const cs = getComputedStyle(el);
          // An element intentionally clipped by an ancestor is fine.
          let clipped = false;
          for (let p = el.parentElement; p; p = p.parentElement) {
            const pcs = getComputedStyle(p);
            if (pcs.overflowX === 'hidden' || pcs.overflowX === 'clip') { clipped = true; break; }
          }
          if (clipped) continue;
          guilty.push(
            `<${el.tagName.toLowerCase()}${el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.') : ''}> ` +
            `left:${Math.round(r.left)} right:${Math.round(r.right)} (${cs.position})`
          );
        }
        if (guilty.length >= 4) break;
      }
      return { over, vw, guilty };
    });

    if (overflow) {
      failures.push(
        `${route} @ ${vp.name}: horizontal overflow by ${overflow.over}px (viewport ${overflow.vw}px)` +
        (overflow.guilty.length ? `\n      culprits: ${overflow.guilty.join('\n                ')}` : '')
      );
    }

    // --- 2. tap targets (mobile only) --------------------------------------
    if (vp.isMobile) {
      const small = await page.evaluate(() => {
        const out = [];
        for (const el of document.querySelectorAll('a, button, [role="button"], input, select')) {
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) continue;
          const cs = getComputedStyle(el);
          if (cs.visibility === 'hidden') continue;
          // Visually-hidden affordances (skip links) are 1x1 until focused.
          if (r.width <= 1 || r.height <= 1) continue;
          if (cs.clipPath && cs.clipPath !== 'none') continue;
          // Inline links inside a paragraph are exempt — they're prose, not controls.
          if (el.tagName === 'A' && el.closest('p, li')) continue;
          if (r.height < 44 || r.width < 24) {
            out.push(`${el.tagName.toLowerCase()}"${(el.textContent || '').trim().slice(0, 24)}" ${Math.round(r.width)}x${Math.round(r.height)}`);
          }
          if (out.length >= 5) break;
        }
        return out;
      });
      if (small.length) {
        failures.push(`${route} @ ${vp.name}: tap targets under 44px — ${small.join(', ')}`);
      }
    }

    // --- 3. console errors --------------------------------------------------
    if (problems.length) {
      failures.push(`${route} @ ${vp.name}:\n      ${[...new Set(problems)].join('\n      ')}`);
    }

    await page.screenshot({ path: `${OUT}/${slug(route)}--${vp.name}.png`, fullPage: true });
    await page.close();
  }

  await context.close();
}

await browser.close();

const checked = routes.length * viewports.length;
let report = `\n${'='.repeat(64)}\n`;
report += `Responsive check — ${routes.length} route(s) x ${viewports.length} viewport(s) = ${checked}\n`;
report += `Viewports: ${viewports.map((v) => `${v.name} (${v.width}x${v.height})`).join(', ')}\n`;
report += `${'='.repeat(64)}\n`;

if (skipped.length) {
  report += `\nSKIPPED (${skipped.length}) — not built yet:\n`;
  for (const s of skipped) report += `  - ${s}\n`;
}

if (failures.length) {
  report += `\nFAILURES (${failures.length}):\n`;
  for (const f of failures) report += `  x ${f}\n`;
} else {
  report += `\nPASS — no overflow, no console errors, no undersized tap targets.\n`;
}
report += `\nScreenshots: ${OUT}/\n`;

console.log(report);
await writeFile(`${OUT}/report.txt`, report);
process.exit(failures.length ? 1 : 0);
