import { ComponentExample } from "@/components/component-example";
import { getProjects } from "@app/preload";
import { useLoaderData } from "react-router";

export async function AppLoader() {
  const data = await getProjects();
  return data;
}

export function App() {
  const data = useLoaderData<typeof AppLoader>();

  return (
    <>
      <ComponentExample />
      <p>{data.length === 0 ? "No Projects" : "Projects"}</p>
    </>
  );
}

export default App;
