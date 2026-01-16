import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

/**
 * Main use case of this button is to render a clickable icon
 *
 * @param param0
 * @returns
 */
export function ButtonRounded({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      size={"icon"}
      className={cn(["rounded-full"], className)}
      {...props}
    ></Button>
  );
}
