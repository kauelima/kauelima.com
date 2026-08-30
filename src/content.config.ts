import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Kaue works across design and product, and the same project often spans both.
 * Rather than duplicating entries, a project declares which disciplines it
 * belongs to and carries an optional framing block per discipline. Index pages
 * and getStaticPaths both filter on `disciplines`, so a design-only project
 * never generates a /product/ URL.
 */
const discipline = z.enum(['design', 'product']);

const framing = z.object({
  /** Section-specific one-liner; this is what the index row shows. */
  headline: z.string(),
  role: z.string(),
  contributions: z.array(z.string()).default([]),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.mdx' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      year: z.number(),
      summary: z.string(),
      disciplines: z.array(discipline).nonempty(),
      cover: image(),
      tags: z.array(z.string()).default([]),
      /** Lower sorts first within an index. */
      order: z.number().default(100),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      url: z.string().url().optional(),
      design: framing.optional(),
      product: framing.optional(),
    }),
});

export const collections = { projects };
