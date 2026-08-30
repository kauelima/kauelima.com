import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * One projects collection, one index at /projects.
 *
 * `disciplines` no longer drives routing — it's a label, since design and
 * product work sit side by side in a single list rather than in separate
 * sections.
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.mdx' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      year: z.number(),
      summary: z.string(),
      /** Shown as a label on the project; 'design', 'product', or both. */
      disciplines: z.array(z.enum(['design', 'product'])).nonempty(),
      /** The one-liner the index row leads with. */
      headline: z.string(),
      role: z.string(),
      contributions: z.array(z.string()).default([]),
      cover: image(),
      tags: z.array(z.string()).default([]),
      /** Lower sorts first. */
      order: z.number().default(100),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      url: z.string().url().optional(),
    }),
});

export const collections = { projects };
