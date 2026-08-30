# kauelima.com

Personal site of Kaue Lima — Product Specialist, Campinas, Brazil.

Built with [Astro](https://astro.build) and Tailwind v4. Static output.

## Running it

```sh
npm install
npx astro dev --background     # manage with: astro dev status | logs | stop
npm run build
npm run shots                  # responsive check, see below
```

## Content model

One `projects` collection (`src/content.config.ts`) backs a single index at
`/projects`. Design and product work sit side by side in one list, because most
projects involved both.

Each entry in `src/content/projects/*.mdx`:

```yaml
title, client, year, summary
disciplines: ['design', 'product']   # a label on the row, not routing
headline: "..."                      # what the index row leads with
role: "Product Designer & Product Manager"
contributions: [...]
cover: ../../assets/covers/<slug>.svg
order: 1                             # lower sorts first
```

To add a project: drop an `.mdx` file in `src/content/projects/`, add a cover to
`src/assets/covers/`, and set `order`.

The home page keeps a Design / Product pair of panels as a statement of the two
sides of the work; both link into the same `/projects` list.

## Responsive checking

`npm run shots` drives the dev server with Playwright across every route at
mobile (390x844) and desktop (1440x900), and fails on horizontal overflow,
console errors, or tap targets under 44px. Screenshots land in `.shots/`.

```sh
npm run shots                      # all routes, both viewports
npm run shots -- /projects /about  # specific routes
npm run shots -- --sweep           # 375 / 768 / 1024 / 1440 / 2560
```

## Design notes

- Palette lives in the `@theme` block of `src/styles/global.css`.
- **Yellow is a surface, never body text** — `#FFE500` on paper is ~1.2:1.
  It fills blocks, highlights and hover states; text on yellow is always ink.
- Fonts (Archivo + Inter) are self-hosted and preloaded via Astro's built-in
  Fonts API — no third-party request.
- The hero wordmark uses `textLength` so the crop is identical before and after
  the webfont loads. It is anchored top-left (`xMinYMin slice`) so the K is
  always whole and letters are lost off the right edge only. Its viewBox is
  trimmed to the painted ink box — measured from rendered pixels, not font
  metrics — so it sits flush to the header and the left edge.

## Known follow-ups

- Favicons and `safari-pinned-tab.svg` are carried over from the previous site
  and still use the old gold (`#EFBC49`). They need regenerating in the new
  palette.
- Project covers are placeholders (`src/assets/covers/*.svg`), sized to the
  intended 3:2 ratio. Replacing them is a file swap.
- Case-study bodies other than Jam Family Calendar are stubs; `TODO(kaue)`
  markers show what needs writing.

## History

The previous Next.js version of this site is preserved on the `legacy-nextjs`
tag.
