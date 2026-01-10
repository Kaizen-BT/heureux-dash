interface QuoteProps {
  quote: string;
  author?: string;
}

export function Quote({ quote, author = "Anonymous" }: QuoteProps) {
  return (
    <blockquote className="flex-col">
      <h1 className="text-5xl text-primary">{`" ${quote} "`}</h1>
      <h1 className="text-5xl text-foreground">{`- ${author} . `}</h1>
    </blockquote>
  );
}
