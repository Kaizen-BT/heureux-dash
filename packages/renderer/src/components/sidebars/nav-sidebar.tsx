import type { ReactElement } from "react";
import type { ContentSidebarProps } from "@/components/sidebars/base-sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export interface NavSidebarContent {
  name: string;
  icon: ReactElement;
  path: string;
}

export function NavigationSidebar({
  sidebarContent,
  ...props
}: ContentSidebarProps<NavSidebarContent>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        {/* TODO */}
      </SidebarHeader>
      <SidebarContent>
        {sidebarContent.map(({ name, icon, path }, idx) => {
          return (
            <NavLink to={path} key={idx}>
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
