// import { SidebarExample } from "@/components/sidebars/base-sidebar";
import { DockDemo } from "@/components/docks";
import { SidebarInset } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
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
  children,
}: UPageWrapperProps) {
  return (
    <>
      <SidebarInset className="p-4">
        <main className="flex flex-1 flex-col gap-4 justify-center items-center">
          {children}
        </main>
        <DockDemo />

        <Toaster />
      </SidebarInset>
      {pageSidebar}
    </>
  );
}
