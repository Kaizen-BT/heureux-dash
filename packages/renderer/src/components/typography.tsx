// Adapted from https://ui.shadcn.com/docs/components/typography

import { cn } from "@/lib/utils";
import type { ComponentProps, ReactElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const sharedVariants = {
  variant: {
    default: "text-primary",
    foreground: "text-foreground",
  },
};

const headingOneVariants = cva(
  ["text-3xl", "md:text-4xl", "lg:text-5xl", "font-bold"],
  {
    variants: { ...sharedVariants },
    defaultVariants: {
      variant: "default",
    },
  }
);

type TypographyH1Props = ComponentProps<"h1"> &
  VariantProps<typeof headingOneVariants>;

/**
 * Heading One component to be used throughout the application to
 * represent an important title/content
 *
 * @returns {ReactElement}
 */
export function TypographyH1({
  className,
  children,
  variant = "default",
  ...props
}: TypographyH1Props): ReactElement {
  return (
    <h1 className={cn(headingOneVariants({ variant, className }))} {...props}>
      {children}
    </h1>
  );
}

const headingFourVariants = cva(
  ["text-base", "md:text-lg", "lg:text-xl", "font-semibold"],
  {
    variants: { ...sharedVariants },
    defaultVariants: {
      variant: "default",
    },
  }
);

type TypographyH4Props = ComponentProps<"h4"> &
  VariantProps<typeof headingFourVariants>;

/**
 * Heading Four component to be used throughout the application to
 * represent a title that summarizes a component's purpose
 *
 * @returns {ReactElement}
 */
export function TypographyH4({
  className,
  children,
  variant = "default",
  ...props
}: TypographyH4Props): ReactElement {
  return (
    <h1 className={cn(headingFourVariants({ variant, className }))} {...props}>
      {children}
    </h1>
  );
}
