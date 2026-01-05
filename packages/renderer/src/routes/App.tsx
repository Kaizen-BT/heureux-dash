import { ComponentExample } from "@/components/component-example";
import { getMilestones, getProject, getProjects, getTasks } from "@app/preload";
import { useLoaderData } from "react-router";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

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
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <ComponentExample />
          <p>{project?.name}</p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );

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
