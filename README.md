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

## How the work sections fit together

Design and Product are sibling sections, and **the same project can appear in
both** with different framing — without duplicating content.

A single `projects` collection (`src/content.config.ts`) backs both. Each entry
in `src/content/projects/*.mdx` declares:

```yaml
disciplines: ['design', 'product']
design:
  headline: "..."      # what /design shows and leads with
  role: "..."
  contributions: [...]
product:
  headline: "..."      # what /product shows and leads with
  role: "..."
  contributions: [...]
```

- Index pages filter on `disciplines.includes(d)`.
- `getStaticPaths` filters the same way, so a design-only project never
  generates a `/product/` URL.
- Both detail routes render the shared `src/layouts/CaseStudy.astro`.
- `<OnlyIn discipline="product">` scopes a passage of the MDX body to one
  section; it reads the discipline from the URL.

To add a project: drop an `.mdx` file in `src/content/projects/`, set
`disciplines`, and add a cover to `src/assets/covers/`.

## Responsive checking

`npm run shots` drives the dev server with Playwright across every route at
mobile (390x844) and desktop (1440x900), and fails on horizontal overflow,
console errors, or tap targets under 44px. Screenshots land in `.shots/`.

```sh
npm run shots                    # all routes, both viewports
npm run shots -- /design /about  # specific routes
npm run shots -- --sweep         # 375 / 768 / 1024 / 1440 / 2560
```

## Design notes

- Palette lives in the `@theme` block of `src/styles/global.css`.
- **Yellow is a surface, never body text** — `#FFE500` on paper is ~1.2:1.
  It fills blocks, highlights and hover states; text on yellow is always ink.
- Fonts (Archivo + Inter) are self-hosted and preloaded via Astro's built-in
  Fonts API — no third-party request.
- The hero wordmark uses `textLength` so the crop is identical before and after
  the webfont loads.

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
