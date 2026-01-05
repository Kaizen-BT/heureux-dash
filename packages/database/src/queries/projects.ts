import type { BaseQueryProps } from "../types";
import { eq } from "drizzle-orm";

/**
 * @deprecated - use QueryDriver
 */
export async function getProjects({ db }: BaseQueryProps) {
  return await db.query.projects.findMany();
}

interface GetProjectProps extends BaseQueryProps {
  id: number;
}

/**
 * @deprecated - use QueryDriver
 */
export async function getProject({ db, id }: GetProjectProps) {
  const project = await db.query.projects.findFirst({
    where: ({ id: projectId }) => eq(projectId, id),
  });

  return project;
}
