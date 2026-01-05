import { createSelectSchema } from "drizzle-zod";
import { projects, milestones, tasks } from "./schemas";

// Zod Schemas

export const ProjectSelectSchema = createSelectSchema(projects);
export const MilestoneSelectSchema = createSelectSchema(milestones);
export const TaskSelectSchema = createSelectSchema(tasks);
