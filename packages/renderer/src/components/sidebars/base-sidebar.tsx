import {
  SidebarContent,
  SidebarHeader,
  SidebarSeparator,
  Sidebar,
} from "@/components/ui/sidebar";
import type { ComponentProps } from "react";
import { SidebarCalendar } from "../date-picker";

/**
 * Generic Content Sidebar helper
 */
export interface ContentSidebarProps<T> extends ComponentProps<typeof Sidebar> {
  sidebarContent: T[];
}

/**
 * Temporary placehold sidebar
 */
export function SidebarExample({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-sidebar-border h-16 border-b" />
      <SidebarContent>
        <SidebarCalendar />
        <SidebarSeparator className="mx-0" />
      </SidebarContent>
    </Sidebar>
  );
}
