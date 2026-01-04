import type { BaseQueryProps } from "../types.js";

export async function getMilestones({ db }: BaseQueryProps) {
  return await db.query.milestones.findMany();
}
