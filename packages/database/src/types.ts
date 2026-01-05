import type { AppDatabase } from "./index";

/**
 * @deprecated - use QueryDriver
 */
export interface BaseQueryProps {
  db: AppDatabase;
}
