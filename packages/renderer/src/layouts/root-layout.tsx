import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavDock } from "@/components/docks/nav-dock";
import { HomeIcon } from "lucide-react";

export function RootLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <main className="h-screen p-8">
          <section className="flex h-full flex-col justify-center items-center">
            <Outlet />
          </section>
          <NavDock items={[{ href: "/", icon: <HomeIcon />, label: "Home" }]} />
          <Toaster />
        </main>
      </TooltipProvider>
    </ThemeProvider>
  );
}
