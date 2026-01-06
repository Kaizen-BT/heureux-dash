import { createRoot } from "react-dom/client";
import "./index.css";
import OverviewPage, { ProjectLoader } from "./routes/Overview.tsx";
import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router";
import { UILayout } from "./layouts/root-layout.tsx";

const router = createHashRouter([
  {
    Component: UILayout,
    children: [{ index: true, Component: OverviewPage, loader: ProjectLoader }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
