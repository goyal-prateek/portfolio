import { site } from '../../site/content'
import { Reveal } from './Reveal'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      id="contact"
      className="scroll-mt-24 section-x pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-10 sm:pb-[max(3rem,env(safe-area-inset-bottom))] sm:pt-12"
    >
      <Reveal className="mx-auto max-w-3xl text-center lg:max-w-4xl">
        <p className="font-display text-lg font-semibold text-(--foreground)">Let&apos;s talk</p>
        <p className="mx-auto mt-2 max-w-[min(100%,65ch)] text-pretty text-sm leading-relaxed text-(--muted-foreground)">
          Open to teams building AI-native products — agentic workflows, reliable LLM systems at scale, and the platform work that makes them shippable.
        </p>
        <div className="mt-4 flex justify-center">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center justify-center break-all text-center text-base font-medium text-(--accent) underline-offset-4 transition-colors duration-150 hover:underline sm:break-normal"
          >
            {site.email}
          </a>
        </div>
        <p className="mt-6 text-xs text-(--muted-foreground)">
          © {year} {site.name}
        </p>
      </Reveal>
    </footer>
  )
}
