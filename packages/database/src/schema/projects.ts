import { sqliteTable } from "drizzle-orm/sqlite-core";
import { baseShape, nameField } from "../schema-helpers.js";
import { relations } from "drizzle-orm/relations";
import { tasks } from "./tasks.js";
import { milestones } from "./milestones.js";

export const projects = sqliteTable("projects", {
  ...baseShape,
  name: nameField("Awesome Project"),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  tasks: many(tasks),
  milestones: many(milestones),
}));
