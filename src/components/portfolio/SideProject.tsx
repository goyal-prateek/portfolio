import type { CSSProperties, PointerEvent } from 'react'
import { Sparkles } from 'lucide-react'
import { site } from '../../site/content'
import { Reveal } from './Reveal'

export function SideProject() {
  const p = site.sideProject

  const updateCardGlow = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    event.currentTarget.style.setProperty('--glow-x', `${x}%`)
    event.currentTarget.style.setProperty('--glow-y', `${y}%`)
    event.currentTarget.style.setProperty('--glow-opacity', '1')
  }

  const resetCardGlow = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--glow-opacity', '0')
  }

  return (
    <section
      id="project"
      className="scroll-mt-24 border-b border-(--border) section-x py-12 sm:py-16"
    >
      <Reveal className="mx-auto max-w-3xl lg:max-w-4xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
          Side project
        </h2>
        <article
          className="group relative isolate mt-8 overflow-hidden rounded-2xl border border-(--border) bg-linear-to-br from-(--card) via-(--card) to-(--muted) bg-size-[200%_200%] p-4 shadow-(--shadow-card) transition-[box-shadow,background-position,border-color] duration-500 ease-out hover:border-(--accent)/20 hover:shadow-(--shadow-card-hover) sm:p-6 lg:p-8"
          style={
            {
              '--glow-x': '50%',
              '--glow-y': '50%',
              '--glow-opacity': '0',
            } as CSSProperties
          }
          onPointerMove={updateCardGlow}
          onPointerLeave={resetCardGlow}
        >
          <div
            className="pointer-events-none absolute inset-[-18%] blur-3xl transition-opacity duration-500 ease-out"
            aria-hidden
            style={{
              opacity: 'var(--glow-opacity)',
              background:
                'radial-gradient(circle at var(--glow-x) var(--glow-y), rgb(17 94 89 / 0.09), transparent 22%), radial-gradient(circle at var(--glow-x) var(--glow-y), rgb(94 234 212 / 0.08), transparent 42%)',
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
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
