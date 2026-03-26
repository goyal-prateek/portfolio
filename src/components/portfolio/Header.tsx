import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { site } from '../../site/content'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#project', label: 'Side project' },
  { href: '#profiles', label: 'Profiles' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="animate-header sticky top-0 z-50 border-b border-(--border) bg-(--background)/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="section-x mx-auto flex h-14 max-w-3xl items-center justify-between gap-3 sm:h-16 lg:max-w-4xl">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-(--foreground) transition-colors duration-150 ease-out hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring)"
        >
          {site.name.split(' ')[0]}
          <span className="text-(--muted-foreground)">.</span>
        </a>

        <nav
          className="hidden max-w-[min(100%,52rem)] flex-wrap items-center justify-end gap-x-0.5 gap-y-1 md:flex lg:max-w-none lg:gap-1"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-2 text-xs font-medium text-(--muted-foreground) transition-colors duration-150 ease-out hover:bg-(--muted) hover:text-(--foreground) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring) lg:px-3 lg:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-lg text-(--foreground) transition-colors duration-150 hover:bg-(--muted) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring) md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X className="size-6" strokeWidth={1.75} /> : <Menu className="size-6" strokeWidth={1.75} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="section-x max-h-[min(24rem,calc(100dvh-4.5rem))] overflow-y-auto overscroll-contain border-t border-(--border) bg-(--background) py-3 md:hidden"
        >
          <nav className="flex flex-col gap-1 pb-[env(safe-area-inset-bottom)]" aria-label="Mobile primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center rounded-lg px-3 py-3 text-base font-medium text-(--foreground) transition-colors active:bg-(--muted) hover:bg-(--muted)"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
