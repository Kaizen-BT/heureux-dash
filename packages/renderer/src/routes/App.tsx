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
      {data.map(({ name, description, urgency }) => {
        return (
          <>
            <p>{name}</p>
            <p>{description}</p>
            <p>{urgency}</p>
          </>
        );
      })}
    </>
  );
}

export default App;
