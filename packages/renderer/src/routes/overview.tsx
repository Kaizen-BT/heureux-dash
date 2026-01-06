import { AppSidebar } from "@/components/app-sidebar";
import { ComponentExample } from "@/components/component-example";
import { UniversalPageWrapper } from "@/layouts/universal";
import { getProject } from "@app/preload";
import { useLoaderData } from "react-router";

export async function ProjectLoader() {
  const project = await getProject(1);
  return project;
}

export function OverviewPage() {
  // const { projects, milestones, tasks } = useLoaderData<typeof AppLoader>();
  const project = useLoaderData<typeof ProjectLoader>();

  return (
    <UniversalPageWrapper
      pageSidebar={
        <AppSidebar
          side="right"
          collapsible="none"
          className="sticky top-0 hidden h-svh border-l lg:flex"
        />
      }
    >
      <ComponentExample />
      <p>{project?.name}</p>
    </UniversalPageWrapper>
  );
}

export default OverviewPage;
