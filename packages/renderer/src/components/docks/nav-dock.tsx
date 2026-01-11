import type { ReactElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Dock, DockIcon } from "@/components/ui/dock";
import { NavLink } from "react-router";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useTheme } from "@/components/theme-provider";

interface NavItem {
  href?: string;
  icon: ReactElement;
  label: string;
}

interface NavDockProps {
  items: NavItem[];
}

export function NavDock({ items }: NavDockProps) {
  const { theme } = useTheme();
  return (
    <Dock
      direction={"bottom"}
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
    >
      {/* Navigation */}
      {items.map(({ href, icon, label }, idx) => (
        <DockIcon key={`nav-bar-item-${idx}`}>
          <Tooltip>
            <TooltipTrigger>
              <NavLink to={href ?? ""}>{icon}</NavLink>
            </TooltipTrigger>
            <TooltipContent>
              <p>{label}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      ))}

      <Separator orientation="vertical" className="h-full" />
      {/* App Utilities */}
      <DockIcon key={`nav-bar-theme`}>
        <Tooltip>
          <TooltipTrigger>
            <AnimatedThemeToggler className="hover:cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent>
            <p>{theme === "dark" ? "Light Mode" : "Dark Mode"}</p>
          </TooltipContent>
        </Tooltip>
      </DockIcon>
    </Dock>
  );
}
