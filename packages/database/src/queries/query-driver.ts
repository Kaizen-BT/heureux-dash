import type { AppDatabase } from "../index";
import type { TProject, TMilestone, TTask } from "../zod-types";
import { eq } from "drizzle-orm";

type AsyncCollection<T> = Promise<T[]>;
type AsyncNullable<T> = Promise<T | undefined>;

export class QueryDriver {
  // Keep private so ipc-bridge does not expose it
  #db: AppDatabase;

  constructor(db: AppDatabase) {
    this.#db = db;
  }

  // --- PROJECT QUERIES ---

  /**
   * Fetches all the Projects stored in the database
   * in an array
   *
   * @returns {AsyncCollection<TProject>}
   */
  getProjects = async (): AsyncCollection<TProject> => {
    return await this.#db.query.projects.findMany();
  };

  /**
   * Fetches the project matching the id specified. An undefined
   * return will occur if no Project matches the id speicifed
   *
   * @param {TProject["id"]} id id of the Project to fetch
   * @returns {AsyncNullable<TProject>}
   */
  getProject = async (id: TProject["id"]): AsyncNullable<TProject> => {
    const project = await this.#db.query.projects.findFirst({
      where: ({ id: projectId }) => eq(projectId, id),
    });

    return project;
  };

  // --- MILESTONE QUERIES ---

  /**
   * Fetches all the Milestones stored in the database in
   * an array
   *
   * @returns {AsyncCollection<TMilestone>}
   */
  getMilestones = async (): AsyncCollection<TMilestone> => {
    return await this.#db.query.milestones.findMany();
  };

  // --- TASK QUERIES ---

  /**
   * Fetches all the Tasks stored in the database in
   * an array
   *
   * @returns {AsyncCollection<TTask>}
   */
  getTasks = async (): AsyncCollection<TTask> => {
    return await this.#db.query.tasks.findMany();
  };
}
