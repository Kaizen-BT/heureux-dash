import { FloatingDock } from "@/components/ui/floating-dock";
import type { ComponentProps, ReactElement } from "react";

interface NavDockProps {
  navItems: ComponentProps<typeof FloatingDock>["items"];
}

/**
 * Floating dock facilitating application navigation
 *
 * @returns {ReactElement}
 */
export function NavDock({ navItems }: NavDockProps): ReactElement {
  return <FloatingDock items={navItems} />;
}
