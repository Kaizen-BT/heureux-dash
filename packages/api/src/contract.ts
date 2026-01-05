import type { AppDatabase } from "@app/database";
import { QueryDriver } from "@app/database/queries";

export function makeAPI({ db }: { db: AppDatabase }) {
  return new QueryDriver(db);
}

export type IPCBridge = ReturnType<typeof makeAPI>;
