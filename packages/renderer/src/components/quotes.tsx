import { TypographyH1 } from "@/components/typography";

interface QuoteProps {
  quote: string;
  author?: string;
}

export function Quote({ quote, author = "Anonymous" }: QuoteProps) {
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
