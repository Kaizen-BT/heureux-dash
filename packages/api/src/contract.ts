import type { AppDatabase } from "@app/database";
import { getProjects } from "@app/database/queries";

export function makeAPI({ db }: { db: AppDatabase }) {
  return {
    getProjects: () => getProjects({ db }),
  };
}

export type IPCBridge = ReturnType<typeof makeAPI>;
