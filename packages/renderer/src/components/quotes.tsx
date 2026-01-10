interface QuoteProps {
  quote: string;
  author?: string;
}

export function Quote({ quote, author = "Anonymous" }: QuoteProps) {
  return (
    <blockquote className="flex w-fit flex-col">
      <h1 className="text-5xl text-primary font-bold">{`" ${quote} "`}</h1>
      <h1 className="text-5xl text-foreground font-bold self-end">{`- ${author} . `}</h1>
    </blockquote>
  );
}
