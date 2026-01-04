import type { BaseQueryProps } from "../types";

export async function getTasks({ db }: BaseQueryProps) {
  return await db.query.tasks.findMany();
}
