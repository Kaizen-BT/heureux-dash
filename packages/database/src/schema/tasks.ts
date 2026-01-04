import { sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { baseShape, nameField } from "../schema-helpers.js";
import { milestones } from "./milestones.js";
import { projects } from "./projects.js";
import { relations } from "drizzle-orm/relations";

export const tasks = sqliteTable("tasks", {
  ...baseShape,
  name: nameField("An exciting task"),
  projectId: integer()
    .references(() => projects.id, { onDelete: "cascade" })
    .notNull(),
  milestoneId: integer().references(() => milestones.id, {
    onDelete: "cascade",
  }),
});

export const tasksRelations = relations(tasks, ({ one }) => ({
  project: one(projects, {
    fields: [tasks.projectId],
    references: [projects.id],
  }),

  milestone: one(milestones, {
    fields: [tasks.milestoneId],
    references: [milestones.id],
  }),
}));
