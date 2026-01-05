import * as React from "react";

import { SidebarCalendar } from "@/components/date-picker";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      {/* TODO: Change the sidebar header to smt useful */}
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        {/* TODO: Add header data */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarCalendar />
        <SidebarSeparator className="mx-0" />
        {/* TODO Add sidebar content */}
      </SidebarContent>
    </Sidebar>
  );
}
