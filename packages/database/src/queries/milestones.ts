import type { BaseQueryProps } from "../types";

/**
 * @deprecated - use QueryDriver
 */
export async function getMilestones({ db }: BaseQueryProps) {
  return await db.query.milestones.findMany();
}
