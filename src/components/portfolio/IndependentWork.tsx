import { ArrowUpRight, Check } from 'lucide-react'
import { site } from '../../site/content'
import { Reveal } from './Reveal'

export function IndependentWork() {
  const project = site.featuredProject

  return (
    <section
      id="work"
      className="scroll-mt-24 border-b border-(--border) section-x py-12 sm:py-16"
    >
      <Reveal className="mx-auto max-w-3xl lg:max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-(--accent)">
          What I&apos;m building
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
          Independent work
        </h2>
        <p className="mt-3 max-w-[min(100%,65ch)] text-pretty text-base leading-relaxed text-(--muted-foreground)">
          Products I take from the first sketch through the operational details.
        </p>

        <article
          className="group relative isolate mt-8 overflow-hidden rounded-2xl border border-(--border) bg-linear-to-br from-(--card) via-(--card) to-(--muted) p-4 shadow-(--shadow-card) transition-[box-shadow,border-color] duration-300 ease-out hover:border-(--accent)/30 hover:shadow-(--shadow-card-hover) sm:p-6 lg:p-8"
        >
          <div
            className="pointer-events-none absolute inset-[-18%] opacity-70 blur-3xl"
            aria-hidden
            style={{
              background:
                'radial-gradient(circle at 82% 18%, rgb(47 134 214 / 0.12), transparent 24%), radial-gradient(circle at 18% 82%, rgb(31 169 113 / 0.08), transparent 42%)',
            }}
          />

          <div className="relative z-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <img
                src={project.logoSrc}
                alt=""
                width="80"
                height="80"
                className="size-16 shrink-0 rounded-2xl border border-(--border) shadow-sm sm:size-20"
              />

              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-(--muted-foreground)">
                  {project.role} <span aria-hidden>·</span> {project.status}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-pretty text-base font-medium text-(--accent)">
                  {project.tagline}
                </p>
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-(--accent) px-4 py-2.5 text-sm font-semibold text-(--accent-foreground) shadow-(--shadow-card) transition-shadow duration-200 ease-out hover:shadow-(--shadow-card-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring)"
              >
                debrix.io
                <ArrowUpRight className="size-4" strokeWidth={2} aria-hidden />
              </a>
            </div>

            <p className="mt-6 max-w-[min(100%,68ch)] text-pretty text-base leading-relaxed text-(--muted-foreground)">
              {project.body}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Debrix principles">
              {project.principles.map((principle) => (
                <li
                  key={principle}
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-(--border) bg-(--background)/65 px-3 py-1.5 text-sm font-medium text-(--foreground)"
                >
                  <Check className="size-3.5 text-(--accent)" strokeWidth={2.25} aria-hidden />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>
    </section>
  )
}
