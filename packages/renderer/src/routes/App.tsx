import { ComponentExample } from "@/components/component-example";
import { getMilestones, getProjects, getTasks } from "@app/preload";
import { useLoaderData } from "react-router";

export async function AppLoader() {
  const [projects, milestones, tasks] = await Promise.all([
    getProjects(),
    getMilestones(),
    getTasks(),
  ]);

  return { projects, milestones, tasks };
}

export function App() {
  const { projects, milestones, tasks } = useLoaderData<typeof AppLoader>();

  return (
    <>
      <ComponentExample />
      {projects.map(({ name, description, dueDate, urgency }) => {
        return (
          <>
            <p>{name}</p>
            <p>{description}</p>
            <p>{urgency}</p>
            <p>{dueDate.toDateString()}</p>
          </>
        );
      })}

      <p>{milestones.some(Boolean) ? "Milestones exist" : "No milestones"}</p>
      <p>{tasks.some(Boolean) ? "Tasks exist" : "No tasks"}</p>
    </>
  );
}

export default App;
