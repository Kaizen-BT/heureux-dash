import type { AppDatabase } from "../index";

interface BaseQueryProps {
  db: AppDatabase;
}

export async function getProjects({ db }: BaseQueryProps) {
  return await db.query.projects.findMany();
}
