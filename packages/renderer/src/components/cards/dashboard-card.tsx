import type { ComponentProps, ReactElement } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import {
  DashboardIcon,
  type DashboardIconProps,
} from "@/components/icons/dashboard-icon";

// Variants... lowkey might be overthinking this one
const dashboardCardVariants = cva("", {
  variants: {
    // Determines the number of columns to span over
    colVariant: {
      normal: ["col-span-4"],
      large: ["col-span-8"],
      full: ["col-span-12"],
    },
    // Determine the number of rows to span over
    rowVariant: {
      normal: ["row-span-1"],
      large: ["row-span-2"],
    },
  },
  defaultVariants: { colVariant: "normal", rowVariant: "normal" },
});

// Props
interface DashboardCardProps
  extends ComponentProps<typeof Card>,
    VariantProps<typeof dashboardCardVariants>,
    DashboardIconProps {
  description?: string;
  title: string;
  centerContent?: boolean;
}

/**
 * Utility component to create new dashboard cards
 * will automatically react to screen size/grid
 *
 * @returns {ReactElement}
 */
export function DashboardCard({
  className,
  colVariant = "normal",
  rowVariant = "normal",
  children,
  Icon,
  description,
  title,
  centerContent,
  ...props
}: DashboardCardProps): ReactElement {
  return (
    <Card
      className={cn(
        dashboardCardVariants({ colVariant, rowVariant, className })
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle className="flex flex-row gap-2">
          <DashboardIcon Icon={Icon} />
          {title}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className={centerContent ? "m-auto" : ""}>
        {children}
      </CardContent>
    </Card>
  );
}
