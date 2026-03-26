import { Sparkles } from 'lucide-react'
import { site } from '../../site/content'
import { Reveal } from './Reveal'

export function SideProject() {
  const p = site.sideProject
  return (
    <section
      id="project"
      className="scroll-mt-24 border-b border-(--border) section-x py-12 sm:py-16"
    >
      <Reveal className="mx-auto max-w-3xl lg:max-w-4xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
          Side project
        </h2>
        <article className="mt-8 overflow-hidden rounded-2xl border border-(--border) bg-linear-to-br from-(--card) via-(--card) to-(--muted) bg-size-[200%_200%] p-4 shadow-(--shadow-card) transition-[box-shadow,background-position] duration-500 ease-out hover:bg-position-[100%_100%] hover:shadow-(--shadow-card-hover) sm:p-6 lg:p-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-(--accent)/15 text-(--accent)">
              <Sparkles className="size-6" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold text-(--foreground)">{p.title}</h3>
              <p className="mx-auto mt-3 max-w-[min(100%,65ch)] text-pretty text-base leading-relaxed text-(--muted-foreground) sm:mx-0">
                {p.body}
              </p>
              <p className="mx-auto mt-5 max-w-[min(100%,65ch)] text-pretty text-sm leading-relaxed text-(--muted-foreground) sm:mx-0">
                Earlier I shipped{' '}
                <a
                  href={site.links.resumer}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold text-(--accent) underline-offset-4 transition-colors hover:underline"
                >
                  Resumer
                </a>
                {' — '}
                an ATS-friendly resume builder (Next.js, LLM-assisted flow, LaTeX).{' '}
                <a
                  href={site.links.resumer}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-(--accent) underline-offset-4 transition-colors hover:underline"
                >
                  Live demo
                </a>
                .
              </p>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  )
}
