import type { ReactElement } from "react";
import type { ContentSidebarProps } from "@/components/sidebars/base-sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { NavLink, type RouteObject } from "react-router";

export interface NavContent {
  name: string;
  icon: ReactElement;
  path: RouteObject["path"];
}

/**
 * Used to render sidebars that facilitate navigation around
 * the application
 *
 * @param {ContentSidebarProps<NavContent>} props
 * @returns {ReactElement}
 */
export function NavigationSidebar({
  sidebarContent,
  ...props
}: ContentSidebarProps<NavContent>): ReactElement {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        {/* TODO */}
      </SidebarHeader>
      <SidebarContent>
        {sidebarContent.map(({ name, icon, path }, idx) => {
          return (
            <NavLink to={path ?? ""} key={idx}>
              <Button>
                {icon}
                {name}
              </Button>
            </NavLink>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
