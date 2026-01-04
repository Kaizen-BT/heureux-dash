import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { baseShape, nameField } from "../schema-helpers.js";
import { projects } from "./projects.js";
import { relations } from "drizzle-orm/relations";
import { tasks } from "./tasks.js";

export const milestones = sqliteTable("milestones", {
  ...baseShape,
  name: nameField("An interesting milestone"),
  projectId: integer()
    .references(() => projects.id, { onDelete: "cascade" })
    .notNull(),
});

export const milestonesRelations = relations(milestones, ({ one, many }) => ({
  project: one(projects, {
    fields: [milestones.projectId],
    references: [projects.id],
  }),

  tasks: many(tasks),
}));
