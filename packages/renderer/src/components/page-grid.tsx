import type { PropsWithChildren } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

/**
 * 12-Col Grid
 */
export function PageGrid({ children }: PropsWithChildren) {
  return (
    <section className="flex-1 grid grid-cols-12 gap-6">{children}</section>
  );
}

export function PageHeader({ children }: PropsWithChildren) {
  return (
    <section className="flex flex-row justify-between">
      {children}
      <AnimatedThemeToggler className="hover:cursor-pointer ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900" />
    </section>
  );
}
