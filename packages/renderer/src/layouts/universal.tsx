import { SidebarExample } from "@/components/sidebars/base-sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import type { PropsWithChildren, ReactElement } from "react";

interface UPageWrapperProps extends PropsWithChildren {
  /**
   * A sidebar that contains content that aid's the current page
   * content OR A sidebar that facilitates interactions relating
   * to the current page
   */
  pageSidebar?: ReactElement;
}

export function UniversalPageWrapper({
  pageSidebar,
  children,
}: UPageWrapperProps) {
  return (
    <>
      <SidebarExample />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4">{children}</main>
        <Toaster />
      </SidebarInset>
      {pageSidebar}
    </>
  );
}
