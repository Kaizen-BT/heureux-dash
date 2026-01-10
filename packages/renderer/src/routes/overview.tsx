import { getProject } from "@app/preload";
import { Quote } from "@/components/quotes";

export async function ProjectLoader() {
  const project = await getProject(1);
  return project;
}

export function OverviewPage() {
  return (
    <>
      <Quote quote="These fries be bussin" author="Ur mom" />
    </>
  );
}

export default OverviewPage;
