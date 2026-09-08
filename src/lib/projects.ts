import { getCollection, type CollectionEntry } from 'astro:content';

export type Discipline = 'design' | 'product';
export type Project = CollectionEntry<'projects'>;

/** Newest year first; ties break alphabetically by title. */
const byDisplayOrder = (a: Project, b: Project) =>
  b.data.year - a.data.year || a.data.title.localeCompare(b.data.title);

/** How many projects the home screen's "Selected work" list shows. */
export const HOME_PROJECT_LIMIT = 4;

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

/**
 * The home screen's "Selected work" list: featured projects first (newest
 * first, ties by title), then, if there's still room under
 * `HOME_PROJECT_LIMIT`, the rest of the published projects filling in the
 * same order. If featured projects alone fill the limit, only they show.
 */
export async function getHomeProjects(limit = HOME_PROJECT_LIMIT): Promise<Project[]> {
  const all = await getProjects();
  const featured = all.filter((project) => project.data.featured);
  const rest = all.filter((project) => !project.data.featured);
  return [...featured, ...rest].slice(0, limit);
}

/** "Design", "Product", or "Design & Product" for the label on a row. */
export function disciplineLabel(project: Project): string {
  const names = project.data.disciplines.map((d) => (d === 'design' ? 'Design' : 'Product'));
  return names.join(' & ');
}
