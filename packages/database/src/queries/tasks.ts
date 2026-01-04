import type { BaseQueryProps } from "../types.js";

export async function getTasks({ db }: BaseQueryProps) {
  return await db.query.tasks.findMany();
}
