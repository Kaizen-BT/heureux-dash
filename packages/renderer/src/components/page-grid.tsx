import type { PropsWithChildren } from "react";

/**
 * 12-Col Grid
 */
export function PageGrid({ children }: PropsWithChildren) {
  return (
    <section className="flex-1 grid grid-cols-12 gap-6">{children}</section>
  );
}
