import type { BaseQueryProps } from "../types";

export async function getProjects({ db }: BaseQueryProps) {
  return await db.query.projects.findMany();
}
