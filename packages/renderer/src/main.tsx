import { createRoot } from "react-dom/client";
import "./index.css";
import App, { ProjectLoader } from "./routes/App.tsx";
import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router";

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    loader: ProjectLoader,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
