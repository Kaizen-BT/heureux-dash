import {
  ProjectSelectSchema,
  MilestoneSelectSchema,
  TaskSelectSchema,
} from "./zod";
import { z } from "zod";

// Types from zod

export type TProject = z.infer<typeof ProjectSelectSchema>;
export type TMilestone = z.infer<typeof MilestoneSelectSchema>;
export type TTask = z.infer<typeof TaskSelectSchema>;
