import { createRoot } from "react-dom/client";
import "./index.css";
import OverviewPage, { ProjectLoader } from "./routes/Overview.tsx";
import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router";
import { RootLayout } from "./layouts/root-layout.tsx";

const router = createHashRouter([
  {
    Component: RootLayout,
    children: [{ index: true, Component: OverviewPage, loader: ProjectLoader }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
