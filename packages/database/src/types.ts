import type { AppDatabase } from "./index.js";

// Base interface for query functions
export interface BaseQueryProps {
  db: AppDatabase;
}
