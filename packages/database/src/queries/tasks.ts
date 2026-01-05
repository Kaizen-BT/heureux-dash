import type { BaseQueryProps } from "../types";

/**
 * @deprecated - use QueryDriver
 */
export async function getTasks({ db }: BaseQueryProps) {
  return await db.query.tasks.findMany();
}
