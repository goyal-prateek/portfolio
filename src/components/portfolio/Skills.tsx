import { site } from '../../site/content'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-(--border) section-x py-12 sm:py-16"
    >
      <div className="mx-auto max-w-3xl lg:max-w-4xl">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
            Skills
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
          {site.skillGroups.map((group, i) => (
            <Reveal key={group.title} delayMs={i * 64}>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold uppercase tracking-[0.06em] text-(--foreground)">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="min-w-0 max-w-full">
                      <span className="inline-flex max-w-full min-h-9 items-center wrap-break-word rounded-lg border border-(--border) bg-(--muted)/60 px-3 py-1.5 text-left text-sm leading-snug text-(--foreground) transition-[border-color,background-color] duration-200 ease-out hover:border-(--accent)/35 hover:bg-(--muted)">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
