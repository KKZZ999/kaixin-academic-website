import Image from "next/image";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import {
  about,
  navigation,
  portfolioItems,
  profile,
  projects,
  publications,
  research
} from "@/data/site-content";

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-oxford/10 bg-paper/88 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a className="font-serif text-lg text-ink" href="#">
          KZ
        </a>
        <div className="hidden items-center gap-7 text-sm text-ink/70 md:flex">
          {navigation.map((item) => (
            <a
              className="transition hover:text-teal"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-oxford/10">
      <div className="mx-auto grid min-h-[78vh] max-w-6xl content-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
        <div>
          <div className="mb-8 h-1 w-28 academic-rule" />
          <p className="mb-5 max-w-2xl text-sm font-semibold uppercase text-teal">
            University of Oxford
          </p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.04] text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-ink/80 sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-ink/70">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="rounded-full bg-oxford px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal" href={profile.links.cv}>
              CV
            </a>
            <a className="rounded-full border border-oxford/20 px-5 py-3 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal" href="#research">
              Research
            </a>
            <a className="rounded-full border border-oxford/20 px-5 py-3 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <aside className="self-end">
          <div className="overflow-hidden rounded-lg border border-oxford/10 bg-white/60 shadow-soft">
            <Image
              alt="Microscopy-inspired scientific illustration of neurons and vesicular biology"
              className="aspect-[4/3] h-auto w-full object-cover"
              height={900}
              priority
              src="/images/neuroscience-hero.png"
              width={1200}
            />
          </div>
          <div className="mt-7 border-l border-oxford/15 pl-7">
            <p className="font-serif text-2xl leading-snug text-ink">
              Cellular neuroscience, organelle biology and translational genetics.
            </p>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-ink">Current focus</dt>
                <dd className="mt-1 text-ink/70">Synaptic vesicle recycling and lysosomal function</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Model systems</dt>
                <dd className="mt-1 text-ink/70">iPSC-derived cortical neurons</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Methods</dt>
                <dd className="mt-1 text-ink/70">Imaging, omics and molecular biology</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <Section eyebrow="About" id="about" title="Academic Background">
        <div className="space-y-7">
          <p className="max-w-3xl text-lg leading-8 text-ink/75">{about.intro}</p>
          <div className="grid gap-4">
            {about.background.map((item) => (
              <p className="border-l-2 border-teal/40 pl-5 leading-7 text-ink/70" key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Research" id="research" title="Synapses, Organelles and Disease">
        <div className="space-y-8">
          <p className="max-w-3xl font-serif text-2xl leading-10 text-ink">
            {research.mainProject}
          </p>
          <div className="flex flex-wrap gap-2">
            {research.keywords.map((keyword) => (
              <span className="rounded-full bg-mist px-4 py-2 text-sm text-ink/75" key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {research.approaches.map((approach) => (
              <div className="rounded-lg border border-oxford/10 bg-white/65 p-5" key={approach}>
                <p className="leading-7 text-ink/70">{approach}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Projects" id="projects" title="Selected Work">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              description={project.description}
              key={project.title}
              meta={project.meta}
              title={project.title}
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Outputs" id="publications" title="Publications and Posters">
        <div className="grid gap-5 md:grid-cols-3">
          {publications.map((item) => (
            <article className="rounded-lg border border-oxford/10 bg-white/70 p-5" key={item.title}>
              <p className="text-xs font-semibold uppercase text-teal">{item.type}</p>
              <h3 className="mt-4 font-serif text-xl text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/70">{item.venue}</p>
              <p className="mt-5 text-sm font-semibold text-moss">{item.status}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Portfolio" id="portfolio" title="Scientific Design Portfolio">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div className="group min-h-44 rounded-lg border border-oxford/10 bg-white/70 p-5 transition hover:-translate-y-1 hover:shadow-soft" key={item}>
              <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-mist font-serif text-lg text-teal">
                {String(index + 1).padStart(2, "0")}
              </div>
              <p className="font-serif text-xl leading-snug text-ink">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Contact" id="contact" title="Get in Touch">
        <div className="grid gap-4 md:grid-cols-2">
          <a className="rounded-lg border border-oxford/10 bg-white/70 p-5 transition hover:border-teal/40" href={`mailto:${profile.email}`}>
            <p className="text-sm font-semibold text-teal">Email</p>
            <p className="mt-2 text-ink/70">{profile.email}</p>
          </a>
          <a className="rounded-lg border border-oxford/10 bg-white/70 p-5 transition hover:border-teal/40" href={profile.links.linkedin}>
            <p className="text-sm font-semibold text-teal">LinkedIn</p>
            <p className="mt-2 text-ink/70">{profile.links.linkedin}</p>
          </a>
          <a className="rounded-lg border border-oxford/10 bg-white/70 p-5 transition hover:border-teal/40" href={profile.links.googleScholar}>
            <p className="text-sm font-semibold text-teal">Google Scholar</p>
            <p className="mt-2 text-ink/70">Add Google Scholar URL</p>
          </a>
          <a className="rounded-lg border border-oxford/10 bg-white/70 p-5 transition hover:border-teal/40" href={profile.links.orcid}>
            <p className="text-sm font-semibold text-teal">ORCID</p>
            <p className="mt-2 text-ink/70">Add ORCID URL</p>
          </a>
        </div>
      </Section>

      <footer className="border-t border-oxford/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Kaixin Zhang</p>
          <p>DPhil Student in Clinical Medicine, University of Oxford</p>
        </div>
      </footer>
    </main>
  );
}
