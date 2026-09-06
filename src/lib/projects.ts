import { getCollection, type CollectionEntry } from 'astro:content';

export type Discipline = 'design' | 'product';
export type Project = CollectionEntry<'projects'>;

const byDisplayOrder = (a: Project, b: Project) =>
  b.data.year - a.data.year || a.data.order - b.data.order;

/**
 * Every project, published or draft, in display order. Used to generate a
 * static route for every project — including drafts — so a draft is always
 * reachable by its direct URL for a visual check, even though it's kept out
 * of the index.
 */
export async function getAllProjects(): Promise<Project[]> {
  const all = await getCollection('projects');
  return all.sort(byDisplayOrder);
}

/** Published projects only, in display order. Drafts never show up here. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }: Project) => !data.draft);
  return all.sort(byDisplayOrder);
}

/** "Design", "Product", or "Design & Product" for the label on a row. */
export function disciplineLabel(project: Project): string {
  const names = project.data.disciplines.map((d) => (d === 'design' ? 'Design' : 'Product'));
  return names.join(' & ');
}
