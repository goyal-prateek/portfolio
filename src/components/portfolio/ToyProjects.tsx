import { Github, ToyBrick } from 'lucide-react'
import { site } from '../../site/content'
import { Reveal } from './Reveal'

export function ToyProjects() {
  const { toyProjectsIntro, toyProjects } = site

  return (
    <section
      id="toy-projects"
      className="scroll-mt-24 border-b border-(--border) section-x py-12 sm:py-16"
    >
      <div className="mx-auto max-w-3xl lg:max-w-4xl">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
            Toy projects
          </h2>
          <p className="mt-3 max-w-[min(100%,65ch)] text-pretty text-base leading-relaxed text-(--muted-foreground)">
            {toyProjectsIntro}
          </p>
        </Reveal>

        <ul className="mt-8 space-y-6 sm:mt-10">
          {toyProjects.map((project, i) => (
            <li key={project.slug} className="mx-auto max-w-2xl lg:mx-0">
              <Reveal delayMs={i * 72}>
                <article className="rounded-2xl border border-(--border) bg-(--card) p-4 shadow-(--shadow-card) transition-shadow duration-200 ease-out hover:shadow-(--shadow-card-hover) sm:p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                    <img
                      src={project.logoSrc}
                      alt={`${project.title} app icon`}
                      width={160}
                      height={160}
                      className="size-16 shrink-0 rounded-2xl border border-(--border) bg-(--muted)/50 object-cover shadow-sm sm:size-18"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="min-w-0 flex-1 space-y-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold tracking-tight text-(--foreground) sm:text-xl">
                          {project.title}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-(--accent)">{project.subtitle}</p>
                      </div>

                      <p className="max-w-[min(100%,55ch)] text-pretty text-sm leading-relaxed text-(--muted-foreground)">
                        {project.description}
                      </p>

                      <ul
                        className="flex flex-wrap gap-2"
                        aria-label={`${project.title} tech stack`}
                      >
                        {project.stack.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-md border border-(--border) bg-(--background) px-2.5 py-1 text-xs font-medium text-(--foreground)"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap items-center gap-3 pt-0.5">
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-(--border) bg-(--background) px-3.5 py-2 text-sm font-semibold text-(--foreground) transition-[background-color,border-color] duration-150 ease-out hover:border-(--accent)/40 hover:bg-(--muted) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring)"
                        >
                          <Github className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                          GitHub
                        </a>
                      </div>

                      <p className="flex items-start gap-2 text-pretty text-xs leading-relaxed text-(--muted-foreground)">
                        <ToyBrick
                          className="mt-0.5 size-3.5 shrink-0 text-(--accent)"
                          strokeWidth={2}
                          aria-hidden
                        />
                        <span>{project.note}</span>
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
