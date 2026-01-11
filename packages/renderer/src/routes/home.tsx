import { getProject } from "@app/preload";
import { Quote } from "@/components/quotes";
import { PageGrid } from "@/components/page-grid";

export async function ProjectLoader() {
  const project = await getProject(1);
  return project;
}

export function HomePage() {
  return (
    <PageGrid>
      <div className="col-span-12 m-auto">
        <Quote quote="Todo -  Center me bro" />
      </div>
    </PageGrid>
  );
}

export default HomePage;
