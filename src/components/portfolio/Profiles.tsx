import { Award, ExternalLink } from 'lucide-react'
import { site } from '../../site/content'
import { Reveal } from './Reveal'

export function Profiles() {
  return (
    <section
      id="profiles"
      className="scroll-mt-24 border-b border-(--border) section-x py-12 sm:py-16"
    >
      <div className="mx-auto max-w-3xl lg:max-w-4xl">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
            Coding profiles & highlights
          </h2>
          <p className="mt-3 max-w-[min(100%,65ch)] text-pretty text-sm leading-relaxed text-(--muted-foreground)">
            {site.profilesIntro}
          </p>
        </Reveal>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {site.profiles.map((profile, i) => (
            <li key={profile.name} className="min-w-0">
              <Reveal delayMs={i * 55}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex min-h-18 min-w-0 flex-col justify-between gap-2 rounded-xl border border-(--border) bg-(--card) p-4 shadow-(--shadow-card) transition-[border-color,box-shadow] duration-200 ease-out hover:border-(--accent)/35 hover:shadow-(--shadow-card-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring)"
                >
                <span className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-(--foreground)">{profile.name}</span>
                  <ExternalLink
                    className="size-4 shrink-0 text-(--muted-foreground) transition-colors group-hover:text-(--accent)"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                <span className="text-pretty text-xs leading-snug text-(--muted-foreground)">{profile.note}</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delayMs={80}>
          <div className="mt-10 rounded-2xl border border-(--border) bg-(--card) p-4 shadow-(--shadow-card) transition-shadow duration-200 ease-out hover:shadow-(--shadow-card-hover) sm:p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <Award className="size-6 text-(--accent)" strokeWidth={1.75} aria-hidden />
            <h3 className="font-display text-lg font-semibold text-(--foreground)">Achievements</h3>
          </div>
          <ul className="mt-5 list-none space-y-3 pl-0">
            {site.achievements.map((item) => (
              <li
                key={item.text}
                className="relative wrap-break-word pl-5 text-pretty text-sm leading-relaxed text-(--muted-foreground) before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-(--accent)"
              >
                {item.text}
                {'link' in item && item.link ? (
                  <>
                    {' '}
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-medium text-(--accent) underline-offset-4 transition-colors hover:underline"
                    >
                      {item.link.label}
                    </a>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
