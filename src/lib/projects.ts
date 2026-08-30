import { getCollection, type CollectionEntry } from 'astro:content';

export type Discipline = 'design' | 'product';
export type Project = CollectionEntry<'projects'>;

const isPublished = ({ data }: Project) => import.meta.env.DEV || !data.draft;

/** Projects belonging to a discipline, in display order. */
export async function getProjectsFor(discipline: Discipline): Promise<Project[]> {
  const all = await getCollection('projects', isPublished);
  return all
    .filter((p) => p.data.disciplines.includes(discipline))
    .sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

/** Every project across both disciplines, for the home page. */
export async function getAllProjects(): Promise<Project[]> {
  const all = await getCollection('projects', isPublished);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

/**
 * The discipline-specific framing, falling back to the shared summary so a
 * project is never blank in an index it belongs to.
 */
export function framingFor(project: Project, discipline: Discipline) {
  const block = project.data[discipline];
  return {
    headline: block?.headline || project.data.summary,
    role: block?.role ?? '',
    contributions: block?.contributions ?? [],
  };
}

/** The discipline to link to from a mixed listing — prefers the one given. */
export function primaryDiscipline(project: Project, prefer?: Discipline): Discipline {
  if (prefer && project.data.disciplines.includes(prefer)) return prefer;
  return project.data.disciplines[0];
}
