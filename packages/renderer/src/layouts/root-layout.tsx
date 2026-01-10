import { DockDemo } from "@/components/docks";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router";
import { TooltipProvider } from "@/components/ui/tooltip";

export function RootLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <main className="h-screen p-8">
          <section className="flex h-full flex-col justify-center items-center">
            <Outlet />
          </section>
          <DockDemo />
          <Toaster />
        </main>
      </TooltipProvider>
    </ThemeProvider>
  );
}
