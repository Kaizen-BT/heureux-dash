import type { BaseQueryProps } from "../types";

export async function getMilestones({ db }: BaseQueryProps) {
  return await db.query.milestones.findMany();
}
