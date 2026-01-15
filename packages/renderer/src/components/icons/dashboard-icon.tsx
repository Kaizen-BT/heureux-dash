import type { ComponentType, HTMLAttributes, ReactElement } from "react";

export type IconProps = HTMLAttributes<SVGElement>;

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
  return <Icon className="w-5 h-5 self-center shrink-0 text-primary" />;
}
