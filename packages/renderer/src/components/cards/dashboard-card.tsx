import type { ComponentProps, ReactElement } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Variants
const dashboardCardVariants = cva("", {
  variants: {
    variant: {
      normal: ["col-span-4"],
      large: ["col-span-8"],
    },
  },
  defaultVariants: { variant: "normal" },
});

// Props
type DashboardCardProps = ComponentProps<typeof Card> &
  VariantProps<typeof dashboardCardVariants>;

/**
 * Utility component to create new dashboard cards
 * will automatically react to screen size/grid
 *
 * @returns {ReactElement}
 */
export function DashboardCard({
  className,
  variant = "normal",
  children,
  ...props
}: DashboardCardProps): ReactElement {
  return (
    <Card
      className={cn(dashboardCardVariants({ variant, className }))}
      {...props}
    >
      {children}
    </Card>
  );
}
