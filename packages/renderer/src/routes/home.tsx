import { getProject } from "@app/preload";
import { Quote } from "@/components/quotes";
import {
  PageActions,
  PageGrid,
  PageHeader,
  PageTitle,
} from "@/components/page-grid";
import { Button } from "@/components/ui/button";
import { IconCirclePlus, IconNewSection } from "@tabler/icons-react";

export async function ProjectLoader() {
  const project = await getProject(1);
  return project;
}

export function HomePage() {
  return (
    <>
      <PageHeader>
        <PageTitle title="Home Page" />
        <PageActions>
          <Button className="rounded-full">
            <IconCirclePlus />
          </Button>
          <Button className="rounded-full">
            <IconNewSection />
          </Button>
        </PageActions>
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
