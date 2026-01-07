// import { SidebarExample } from "@/components/sidebars/base-sidebar";
import { NavigationSidebar } from "@/components/sidebars/nav-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { FolderKanban, Home, LayoutList, Milestone } from "lucide-react";
import type { PropsWithChildren, ReactElement } from "react";

interface UPageWrapperProps extends PropsWithChildren {
  /**
   * A sidebar with aiding content or facilitates interactions
   * relating to the current page
   *
   * @see {@link https://ui.shadcn.com/view/new-york-v4/sidebar-15|Shadcn Sidebar Example}
   */
  pageSidebar?: ReactElement;

  /**
   * Element rendered on top of the main content of the page
   */
  pageHeader?: ReactElement;
}

export function UniversalPageWrapper({
  pageSidebar,
  // pageHeader,
  children,
}: UPageWrapperProps) {
  return (
    <>
      <NavigationSidebar
        sidebarContent={[
          { name: "Home", icon: <Home /> },
          { name: "Projects", icon: <FolderKanban /> },
          { name: "Milestones", icon: <Milestone /> },
          { name: "Tasks", icon: <LayoutList /> },
        ]}
      />
      <SidebarInset>
        <main className="flex flex-1 flex-col gap-4 p-4">{children}</main>

        <Toaster />
      </SidebarInset>
      {pageSidebar}
    </>
  );
}
