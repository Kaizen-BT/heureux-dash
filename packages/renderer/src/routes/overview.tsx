import { SidebarExample } from "@/components/sidebars/base-sidebar";

import { UniversalPageWrapper } from "@/layouts/universal";
import { getProject } from "@app/preload";
import { Quote } from "@/components/quotes";

export async function ProjectLoader() {
  const project = await getProject(1);
  return project;
}

export function OverviewPage() {
  return (
    <UniversalPageWrapper
      pageSidebar={
        <SidebarExample
          collapsible="none"
          className="sticky top-0 hidden h-svh border-l lg:flex"
        />
      }
      pageHeader={<h1>Overview</h1>}
    >
      <Quote quote="Keep squares out yo circle" author="Kanye West" />
    </UniversalPageWrapper>
  );
}

export default OverviewPage;
