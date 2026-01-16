import type { PropsWithChildren } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { TypographyH1 } from "@/components/typography";
import { Separator } from "@/components/ui/separator";
import { IconBrandGithub, IconSettings } from "@tabler/icons-react";
import { ButtonRounded } from "./buttons/button-rounded";

/**
 * Flexible 12-Col Grid
 */
export function PageGrid({ children }: PropsWithChildren) {
  return (
    <section className="flex-1 grid grid-cols-12 gap-6 py-6">
      {children}
    </section>
  );
}

/**
 * Renders content provided in the header of the page
 */
export function PageHeader({ children }: PropsWithChildren) {
  return <section className="flex flex-row">{children}</section>;
}

/**
 * Renders a title using a big header
 */
export function PageTitle({ title }: { title: string }) {
  return <TypographyH1>{title}</TypographyH1>;
}

export function PageActions({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-row items-center gap-6 ml-auto">
      {children}
      {children && (
        <Separator className="h-full bg-primary" orientation="vertical" />
      )}
      {/* Universal actions */}

      <ButtonRounded>
        <IconBrandGithub />
      </ButtonRounded>

      <ButtonRounded>
        <IconSettings />
      </ButtonRounded>

      <AnimatedThemeToggler className="rounded-full" />
    </div>
  );
}
