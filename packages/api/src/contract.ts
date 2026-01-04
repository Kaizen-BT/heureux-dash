import type { AppDatabase } from "@app/database";
import {
  getMilestones,
  getProject,
  getProjects,
  getTasks,
} from "@app/database/queries";

export function makeAPI({ db }: { db: AppDatabase }) {
  return {
    // Projects
    getProjects: () => getProjects({ db }),
    getProject: (id: number) => getProject({ db, id }),

    // Milestones
    getMilestones: () => getMilestones({ db }),

    // Tasks
    getTasks: () => getTasks({ db }),
  };
}

export type IPCBridge = ReturnType<typeof makeAPI>;
