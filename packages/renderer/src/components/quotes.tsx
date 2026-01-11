import { TypographyH1 } from "@/components/typography";
import { cn } from "@/lib/utils";
import type { ReactElement } from "react";

interface QuoteProps {
  quote: string;
  author?: string;
  className?: string;
}

/**
 * Utility component to render a quote that will likely be fetched
 * from an API once per day
 *
 * @returns {ReactElement}
 */
export function Quote({
  quote,
  author = "Anonymous",
  className,
}: QuoteProps): ReactElement {
  return (
    <blockquote className={cn("flex flex-col", className)}>
      <TypographyH1>{`" ${quote} "`}</TypographyH1>
      <TypographyH1
        variant={"foreground"}
        className="self-end"
      >{`- ${author} . `}</TypographyH1>
    </blockquote>
  );
}
