type CardProps = {
  title: string;
  description: string;
  meta?: string;
};

export function Card({ title, description, meta }: CardProps) {
  return (
    <article className="rounded-lg border border-oxford/10 bg-white/70 p-6 shadow-soft">
      {meta ? (
        <p className="mb-4 text-xs font-semibold uppercase text-moss">
          {meta}
        </p>
      ) : null}
      <h3 className="font-serif text-xl text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-ink/70">{description}</p>
    </article>
  );
}
