import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { baseShape, nameField } from "../schema-helpers";
import { projects } from "./projects";
import { relations } from "drizzle-orm/relations";
import { tasks } from "./tasks";

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
