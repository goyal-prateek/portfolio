import { ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { site } from '../../site/content'
import { Avatar } from './Avatar'

export function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-24 border-b border-(--border) section-x py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-3xl lg:max-w-4xl">
        <div className="min-w-0">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex shrink-0 justify-center sm:justify-start">
              <Avatar className="size-28 sm:size-32 md:size-36" />
            </div>
            <div className="min-w-0 flex-1 text-center sm:pt-1 sm:text-left">
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-(--accent) sm:text-sm">
                <span className="accent-line inline-block sm:inline">{site.role}</span>
                <span className="mx-1 hidden sm:inline">·</span>
                <span className="mt-1 block sm:mt-0 sm:inline">{site.company}</span>
              </p>
              <h1 className="mt-3 font-display text-balance text-[clamp(1.75rem,1.1rem+3.2vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-(--foreground)">
                {site.name}
              </h1>
              <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-(--muted-foreground) sm:justify-start">
                <MapPin className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                <span className="text-pretty">{site.location}</span>
              </p>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-[min(100%,65ch)] text-pretty text-base leading-relaxed text-(--muted-foreground) sm:mx-0">
            {site.headline}
          </p>

          <div className="mt-5 flex justify-center sm:justify-start">
            <a
              href={site.featuredProject.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex min-h-11 max-w-full items-center gap-2 rounded-xl border border-(--border) bg-(--card) px-3 py-2 text-sm text-(--foreground) shadow-(--shadow-card) transition-[border-color,box-shadow] duration-200 ease-out hover:border-(--accent)/45 hover:shadow-(--shadow-card-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring)"
            >
              <img
                src={site.featuredProject.logoSrc}
                alt=""
                width="24"
                height="24"
                className="size-6 shrink-0 rounded-md"
              />
              <span className="text-(--muted-foreground)">Now building</span>
              <span className="font-semibold">{site.featuredProject.title}</span>
              <ExternalLink
                className="size-3.5 shrink-0 text-(--muted-foreground) transition-colors group-hover:text-(--accent)"
                strokeWidth={1.75}
                aria-hidden
              />
            </a>
          </div>

          <ul className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center md:justify-start lg:mx-0">
            <li className="w-full sm:w-auto">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-(--accent) px-5 py-2.5 text-sm font-semibold text-(--accent-foreground) shadow-(--shadow-card) transition-shadow duration-200 ease-out hover:shadow-(--shadow-card-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring) sm:w-auto sm:justify-center"
              >
                <Mail className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                Email me
              </a>
            </li>
            <li className="w-full sm:w-auto">
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
            <li className="w-full sm:w-auto">
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
