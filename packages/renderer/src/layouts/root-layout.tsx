import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavDock } from "@/components/docks/nav-dock";
import {
  ChartLine,
  HomeIcon,
  LayoutDashboard,
  PanelsTopLeft,
} from "lucide-react";

export function RootLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        {/* Dynamic Resize to center page content */}
        <main className="min-h-screen w-full max-w-7xl mx-auto flex flex-col">
          {/* Page Content */}
          <Outlet />

          <NavDock
            items={[
              { href: "/", icon: <HomeIcon />, label: "Home" },
              {
                href: "/dashboard",
                icon: <LayoutDashboard />,
                label: "Dashboard",
              },
              { href: "/", icon: <PanelsTopLeft />, label: "Projects" },
              { href: "/", icon: <ChartLine />, label: "Analytics" },
            ]}
          />
          <Toaster />
        </main>
      </TooltipProvider>
    </ThemeProvider>
  );
}
