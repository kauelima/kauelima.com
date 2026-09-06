## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Case study body images

In-body images for a case study (as opposed to its `cover`) live at
`src/assets/case-studies/<project-slug>/`. Import them and render with
`astro:assets`' `<Image>` rather than plain Markdown image syntax, so each
one can be sized to its own aspect ratio instead of being forced full-width:

```mdx
import { Image } from 'astro:assets';
import introImg from '../../assets/case-studies/smartcard/intro.png';

<Image src={introImg} alt="What's shown" class="mx-auto max-w-xs" />
```

Put the imports directly under the frontmatter, before the first paragraph.
Portrait/phone screenshots get a capped width and are centred (`mx-auto
max-w-xs`, or whatever cap suits the image); wide screenshots and diagrams
get `w-full`. No border on these images.

Name each file for the section or role it illustrates, not for whatever the
export tool called it (`Screenshot 1.png`, a Figma frame name, etc.):
`intro.png` for the lead image before "The problem", `design-system.png` for
the design-system section, and so on for whatever else a given case study
needs (`flow.png`, `dashboard.png`...). Lowercase, kebab-case, one word for
the role wherever a single word covers it.

## Writing style

No em dashes in any content (copy, case studies, docs). Use a period, comma, or
colon instead, whichever the sentence actually calls for. Hyphens are fine
where they belong (compound words, ranges). Write plainly, the way the rest of
the case studies already read, not with the rhythm and hedges of generated
text.
