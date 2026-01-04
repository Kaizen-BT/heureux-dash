import { ComponentExample } from "@/components/component-example";
import { sayHi } from "@app/preload";
import { useLoaderData } from "react-router";

export async function AppLoader() {
  const data = await sayHi("Peni");
  return data;
}

export function App() {
  const data = useLoaderData<typeof AppLoader>();

  return (
    <>
      <ComponentExample />
      <p>{data}</p>
    </>
  );
}

export default App;
