import type { ComponentType, HTMLAttributes, ReactElement } from "react";

type IconProps = HTMLAttributes<SVGElement>;

export interface DashboardIconProps {
  Icon: ComponentType<IconProps>;
}

/**
 * Utility component to ensure all dashboard icons
 * look identical
 *
 * @returns {ReactElement}
 */
export function DashboardIcon({ Icon }: DashboardIconProps): ReactElement {
  return <Icon className="w-4 h-4 self-center shrink-0" />;
}
