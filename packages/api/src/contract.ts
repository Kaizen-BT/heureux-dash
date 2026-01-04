import type { AppDatabase } from "@app/database";
import { getMilestones, getProjects, getTasks } from "@app/database/queries";

export function makeAPI({ db }: { db: AppDatabase }) {
  return {
    // Projects
    getProjects: () => getProjects({ db }),

    // Milestones
    getMilestones: () => getMilestones({ db }),

    // Tasks
    getTasks: () => getTasks({ db }),
  };
}

export type IPCBridge = ReturnType<typeof makeAPI>;
