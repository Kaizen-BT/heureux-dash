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
   * Fetches the project matching the id specified.
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

  /**
   * Fetches the task matching the id specified
   *
   * @param {TMilestone["id"]} id
   * @returns {AsyncNullable<TMilestone>}
   */
  getMilestone = async (id: TMilestone["id"]): AsyncNullable<TMilestone> => {
    return await this.#db.query.milestones.findFirst({
      where: ({ id: milestoneId }) => eq(milestoneId, id),
    });
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

  /**
   *
   * @param {TTask["id"]} id
   * @returns {AsyncNullable<TTask>}
   */
  getTask = async (id: TTask["id"]): AsyncNullable<TTask> => {
    return this.#db.query.tasks.findFirst({
      where: ({ id: taskId }) => eq(taskId, id),
    });
  };
}
