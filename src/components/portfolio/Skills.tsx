import { site } from '../../site/content'
import { Reveal } from './Reveal'
import { SkillsMiniScene } from './SkillsMiniScene'

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-(--border) section-x py-12 sm:py-16"
    >
      <div className="mx-auto max-w-3xl lg:max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--card) px-5 py-5 shadow-(--shadow-card) sm:px-6 sm:py-6 lg:px-8 lg:py-7">
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-full max-w-md sm:block"
              aria-hidden
            >
              <div className="absolute right-6 top-8 size-24 rounded-full bg-(--accent)/10 blur-3xl" />
              <div className="absolute bottom-6 right-16 size-32 rounded-full bg-(--accent)/8 blur-3xl" />
              <div className="absolute inset-y-4 right-4 w-full max-w-88 opacity-95 lg:max-w-96">
                <SkillsMiniScene className="h-full min-h-40 sm:min-h-44 lg:min-h-48" />
              </div>
            </div>

            <div className="relative z-10 max-w-[min(100%,34rem)]">
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-(--accent) sm:text-sm">
                What I build with most
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
                Skills
              </h2>
              <p className="mt-3 max-w-[min(100%,60ch)] text-pretty text-sm leading-relaxed text-(--muted-foreground) sm:text-base">
                Backend systems, cloud infrastructure, AI workflows, and frontend delivery
                tools I reach for most often.
              </p>
            </div>

            <div className="pointer-events-none relative mt-6 sm:hidden" aria-hidden>
              <div className="absolute inset-0 rounded-2xl bg-(--muted)/50" />
              <SkillsMiniScene className="relative h-32" />
            </div>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {site.skillGroups.map((group, i) => (
            <Reveal key={group.title} delayMs={i * 64}>
              <article className="h-full min-w-0 rounded-2xl border border-(--border) bg-(--card)/80 p-4 shadow-(--shadow-card) transition-[border-color,box-shadow,background-color] duration-200 ease-out hover:border-(--accent)/25 hover:bg-(--card) hover:shadow-(--shadow-card-hover) sm:p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-(--accent)">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="min-w-0 max-w-full">
                      <span className="inline-flex max-w-full min-h-9 items-center wrap-break-word rounded-lg border border-(--border) bg-(--muted)/65 px-3 py-1.5 text-left text-sm leading-snug text-(--foreground) transition-[border-color,background-color] duration-200 ease-out hover:border-(--accent)/35 hover:bg-(--muted)">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
