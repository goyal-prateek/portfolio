import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { site } from '../../site/content'
import { Avatar } from './Avatar'

export function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-24 border-b border-(--border) section-x py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 sm:gap-10 lg:max-w-4xl lg:flex-row lg:items-center lg:gap-12">
        <div className="flex shrink-0 justify-center lg:justify-start">
          <Avatar className="animate-avatar" />
        </div>

        <div className="min-w-0 flex-1 text-center lg:text-left">
          <p className="animate-hero animate-hero-delay-1 text-xs font-medium uppercase tracking-[0.08em] text-(--accent) sm:text-sm">
            <span className="accent-line inline-block sm:inline">{site.role}</span>
            <span className="mx-1 hidden sm:inline">·</span>
            <span className="mt-1 block sm:mt-0 sm:inline">{site.company}</span>
          </p>
          <h1 className="animate-hero animate-hero-delay-2 mt-3 font-display text-balance text-[clamp(1.75rem,1.1rem+3.2vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-(--foreground)">
            {site.name}
          </h1>
          <p className="animate-hero animate-hero-delay-3 mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-(--muted-foreground) lg:justify-start">
            <MapPin className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
            <span className="text-pretty">{site.location}</span>
          </p>
          <p className="animate-hero animate-hero-delay-4 mx-auto mt-6 max-w-[min(100%,65ch)] text-pretty text-base leading-relaxed text-(--muted-foreground) lg:mx-0">
            {site.headline}
          </p>

          <ul className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:justify-start">
            <li className="animate-hero animate-hero-delay-5 w-full sm:w-auto">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-(--accent) px-5 py-2.5 text-sm font-semibold text-(--accent-foreground) shadow-(--shadow-card) transition-shadow duration-200 ease-out hover:shadow-(--shadow-card-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring) sm:w-auto sm:justify-center"
              >
                <Mail className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                Email me
              </a>
            </li>
            <li className="animate-hero animate-hero-delay-6 w-full sm:w-auto">
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-(--border) bg-(--card) px-5 py-2.5 text-sm font-semibold text-(--foreground) transition-[background-color,border-color] duration-200 ease-out hover:border-(--accent)/40 hover:bg-(--muted) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring) sm:w-auto sm:justify-center"
              >
                <Github className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                GitHub
              </a>
            </li>
            <li className="animate-hero animate-hero-delay-7 w-full sm:w-auto">
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-(--border) bg-(--card) px-5 py-2.5 text-sm font-semibold text-(--foreground) transition-[background-color,border-color] duration-200 ease-out hover:border-(--accent)/40 hover:bg-(--muted) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring) sm:w-auto sm:justify-center"
              >
                <Linkedin className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
