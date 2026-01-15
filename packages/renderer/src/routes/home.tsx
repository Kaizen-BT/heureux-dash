import { getProject } from "@app/preload";
import { Quote } from "@/components/quotes";
import { PageActions, PageGrid, PageHeader } from "@/components/page-grid";

export async function ProjectLoader() {
  const project = await getProject(1);
  return project;
}

export function HomePage() {
  return (
    <>
      <PageHeader>
        <PageActions />
      </PageHeader>
      <PageGrid>
        <Quote quote="Todo -  Center me bro" className="col-span-12 m-auto" />
      </PageGrid>
    </>
  );
}

export default HomePage;
