import { Building2 } from 'lucide-react'
import { site } from '../../site/content'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-(--border) section-x py-12 sm:py-16"
    >
      <div className="mx-auto max-w-3xl lg:max-w-4xl">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
            Experience
          </h2>
        </Reveal>
        <ul className="mt-8 space-y-8 sm:space-y-10">
          {site.experience.map((job, i) => (
            <li key={`${job.title}-${job.range}`}>
              <Reveal delayMs={i * 72}>
                <article className="overflow-hidden rounded-2xl border border-(--border) bg-(--card) p-4 shadow-(--shadow-card) transition-shadow duration-200 ease-out hover:shadow-(--shadow-card-hover) sm:p-6 lg:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="flex min-w-0 gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--muted) text-(--accent)">
                        <Building2 className="size-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-semibold text-(--foreground) sm:text-xl">
                          {job.company}
                        </h3>
                        <p className="text-pretty text-sm text-(--muted-foreground)">
                          {job.title} · {job.location}
                        </p>
                      </div>
                    </div>
                    <p className="shrink-0 text-sm font-medium tabular-nums text-(--muted-foreground) sm:pt-1 sm:text-right">
                      {job.range}
                    </p>
                  </div>
                  <ul className="mt-6 list-none space-y-3 pl-0">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="relative wrap-break-word pl-5 text-pretty text-sm leading-relaxed text-(--muted-foreground) before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-(--accent)"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
