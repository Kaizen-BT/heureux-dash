import { TypographyH1 } from "@/components/typography";
import type { ReactElement } from "react";

interface QuoteProps {
  quote: string;
  author?: string;
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
}: QuoteProps): ReactElement {
  return (
    <blockquote className="flex w-fit flex-col">
      <TypographyH1>{`" ${quote} "`}</TypographyH1>
      <TypographyH1
        variant={"foreground"}
        className="self-end"
      >{`- ${author} . `}</TypographyH1>
    </blockquote>
  );
}
