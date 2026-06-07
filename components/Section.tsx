import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  id?: string;
};

export function Section({ eyebrow, title, children, id }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.7fr]">
        <div>
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase text-teal">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
