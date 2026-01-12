import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavDock } from "@/components/docks/ace-nav-dock";

import {
  IconBriefcase,
  IconChartDots,
  IconHome,
  IconLayoutDashboard,
} from "@tabler/icons-react";

export function RootLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        {/* Dynamic Resize to center page content */}
        <main className="min-h-screen w-full max-w-7xl mx-auto flex flex-col pt-14 gap-8">
          {/* Page Content */}
          <Outlet />

          {/* TODO Let NavDock style the icons */}
          <NavDock
            navItems={[
              {
                href: "/",
                icon: (
                  <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                title: "Home",
              },
              {
                href: "/dashboard",
                icon: (
                  <IconLayoutDashboard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                title: "Dashboard",
              },
              {
                href: "/",
                icon: (
                  <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                title: "Projects",
              },
              {
                href: "/",
                icon: (
                  <IconChartDots className="h-full w-full text-neutral-500 dark:text-neutral-300" />
                ),
                title: "Analytics",
              },
            ]}
          />
          <Toaster />
        </main>
      </TooltipProvider>
    </ThemeProvider>
  );
}
