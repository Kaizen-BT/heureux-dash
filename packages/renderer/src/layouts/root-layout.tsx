import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export function RootLayout() {
  return (
    <SidebarProvider>
      <Outlet />
    </SidebarProvider>
  );
}
