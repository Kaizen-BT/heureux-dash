import { sqliteTable } from "drizzle-orm/sqlite-core";
import { baseShape, nameField } from "../schema-helpers";
import { relations } from "drizzle-orm/relations";
import { tasks } from "./tasks";
import { milestones } from "./milestones";

export const projects = sqliteTable("projects", {
  ...baseShape,
  name: nameField("Awesome Project"),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  tasks: many(tasks),
  milestones: many(milestones),
}));
