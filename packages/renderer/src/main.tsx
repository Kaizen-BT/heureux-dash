import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage, { ProjectLoader } from "./routes/home.tsx";
import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router";
import { RootLayout } from "./layouts/root-layout.tsx";
import { DashboardPage } from "./routes/dashboard.tsx";

const router = createHashRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage, loader: ProjectLoader },
      { path: "dashboard", Component: DashboardPage },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
