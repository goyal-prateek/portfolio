import { GraduationCap } from 'lucide-react'
import { site } from '../../site/content'
import { Reveal } from './Reveal'

export function Education() {
  const e = site.education
  return (
    <section
      id="education"
      className="scroll-mt-24 border-b border-(--border) section-x py-12 sm:py-16"
    >
      <Reveal className="mx-auto max-w-3xl lg:max-w-4xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
          Education
        </h2>
        <article className="mt-8 flex flex-col gap-4 rounded-2xl border border-(--border) bg-(--card) p-4 shadow-(--shadow-card) transition-shadow duration-200 ease-out hover:shadow-(--shadow-card-hover) sm:flex-row sm:items-start sm:gap-5 sm:p-6 lg:p-8">
          <span className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-xl bg-(--muted) text-(--accent) sm:mx-0">
            <GraduationCap className="size-6" strokeWidth={1.75} aria-hidden />
          </span>
          <div className="min-w-0 text-center sm:text-left">
            <h3 className="font-display text-lg font-semibold text-(--foreground) sm:text-xl">
              {e.school}
            </h3>
            <p className="mt-1 text-sm text-(--muted-foreground)">{e.degree}</p>
            <p className="mt-3 text-sm tabular-nums text-(--muted-foreground)">{e.range}</p>
            <p className="mt-2 inline-flex rounded-lg bg-(--muted) px-3 py-1 text-sm font-medium text-(--foreground)">
              {e.detail}
            </p>
          </div>
        </article>
      </Reveal>
    </section>
  )
}
