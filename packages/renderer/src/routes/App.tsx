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

export function App() {
  // const { projects, milestones, tasks } = useLoaderData<typeof AppLoader>();
  const project = useLoaderData<typeof ProjectLoader>();

  return (
    <>
      <ComponentExample />
      {/* {projects.map(({ name, description, dueDate, urgency, id }) => {
        return (
          <>
            <p>{name}</p>
            <p>{id}</p>
            <p>{description}</p>
            <p>{urgency}</p>
            <p>{dueDate.toDateString()}</p>
          </>
        );
      })}

      <p>{milestones.some(Boolean) ? "Milestones exist" : "No milestones"}</p>
      <p>{tasks.some(Boolean) ? "Tasks exist" : "No tasks"}</p> */}

      <p>{project?.name}</p>
    </>
  );
}

export default App;
