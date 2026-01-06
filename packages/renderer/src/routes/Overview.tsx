import { ComponentExample } from "@/components/component-example";
import { getMilestones, getProject, getProjects, getTasks } from "@app/preload";
import { useLoaderData } from "react-router";

export async function AppLoader() {
  const [projects, milestones, tasks] = await Promise.all([
    getProjects(),
    getMilestones(),
    getTasks(),
  ]);

  return { projects, milestones, tasks };
}

export async function ProjectLoader() {
  const project = await getProject(1);
  return project;
}

export function OverviewPage() {
  // const { projects, milestones, tasks } = useLoaderData<typeof AppLoader>();
  const project = useLoaderData<typeof ProjectLoader>();

  return (
    <>
      <ComponentExample />
      <p>{project?.name}</p>
    </>
  );
}

export default OverviewPage;
