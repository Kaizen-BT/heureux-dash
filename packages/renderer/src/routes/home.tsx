import { getProject } from "@app/preload";
import { Quote } from "@/components/quotes";

export async function ProjectLoader() {
  const project = await getProject(1);
  return project;
}

export function HomePage() {
  return (
    <>
      <Quote quote="Ngl you gotta lock in twin" />
    </>
  );
}

export default HomePage;
