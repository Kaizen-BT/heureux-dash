import type { AppDatabase } from "../index";
import { eq } from "drizzle-orm";

export class QueryDriver {
  // Keep private so ipc-bridge does not expose it
  #db: AppDatabase;

  constructor(db: AppDatabase) {
    this.#db = db;
  }

  // Project Queries

  getProjects = async () => {
    return await this.#db.query.projects.findMany();
  };

  getProject = async (id: number) => {
    const project = await this.#db.query.projects.findFirst({
      where: ({ id: projectId }) => eq(projectId, id),
    });

    return project;
  };

  // Milestone Queries

  getMilestones = async () => {
    return await this.#db.query.milestones.findMany();
  };

  // Task Queries

  getTasks = async () => {
    return await this.#db.query.tasks.findMany();
  };
}
