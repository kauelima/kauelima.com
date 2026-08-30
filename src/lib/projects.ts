import { getCollection, type CollectionEntry } from 'astro:content';

export type Discipline = 'design' | 'product';
export type Project = CollectionEntry<'projects'>;

const isPublished = ({ data }: Project) => import.meta.env.DEV || !data.draft;

/** Every project, in display order. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', isPublished);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

/** "Design", "Product", or "Design & Product" — for the label on a row. */
export function disciplineLabel(project: Project): string {
  const names = project.data.disciplines.map((d) => (d === 'design' ? 'Design' : 'Product'));
  return names.join(' & ');
}
