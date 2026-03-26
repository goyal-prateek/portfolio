import { site } from '../../site/content'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-(--border) section-x py-12 sm:py-16"
    >
      <Reveal className="mx-auto max-w-3xl lg:max-w-4xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
          About
        </h2>
        <div className="mt-6 max-w-[min(100%,65ch)] space-y-4 text-pretty text-base leading-relaxed text-(--muted-foreground) lg:max-w-none">
          {site.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
