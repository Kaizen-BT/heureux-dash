import {
  SidebarContent,
  SidebarHeader,
  SidebarSeparator,
  Sidebar,
} from "@/components/ui/sidebar";
import type { ComponentProps, ReactElement } from "react";
import { SidebarCalendar } from "../date-picker";

/**
 * Helper for sidebars that render content into SidebarContent
 * @see {@link https://ui.shadcn.com/docs/components/sidebar#structure|Shadcn Docs}
 */
export interface ContentSidebarProps<T> extends ComponentProps<typeof Sidebar> {
  /**
   * Generic array to be mapped and rendered into elements inside SidebarContent
   */
  sidebarContent: T[];
}

/**
 * Temporary placeholder sidebar
 * @returns {ReactElement}
 */
export function SidebarExample({
  ...props
}: React.ComponentProps<typeof Sidebar>): ReactElement {
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
