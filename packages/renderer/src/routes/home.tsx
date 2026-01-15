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
        <div className="col-span-12 m-auto">
          <Quote quote="Todo -  Center me bro" />
        </div>
      </PageGrid>
    </>
  );
}

export default HomePage;
