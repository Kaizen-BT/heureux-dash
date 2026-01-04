import type { BaseQueryProps } from "../types.js";

export async function getProjects({ db }: BaseQueryProps) {
  return await db.query.projects.findMany();
}

interface GetProjectProps extends BaseQueryProps {
  id: number;
}

export async function getProject({ db, id }: GetProjectProps) {
  const project = await db.query.projects.findFirst({
    where: ({ id: projectId }, { eq }) => eq(projectId, id),
  });

  return project;
}
