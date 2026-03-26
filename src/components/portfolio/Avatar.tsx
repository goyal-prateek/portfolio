import { useState } from 'react'
import { site } from '../../site/content'

export function Avatar({ className = '' }: { className?: string }) {
  const [showFallback, setShowFallback] = useState(false)

  if (!showFallback) {
    return (
      <img
        src={site.portraitSrc}
        alt={`${site.name}`}
        width={160}
        height={160}
        className={`size-32 rounded-2xl object-cover shadow-(--shadow-card) ring-1 ring-(--border) sm:size-36 md:size-40 ${className}`}
        onError={() => setShowFallback(true)}
      />
    )
  }

  return (
    <div
      className={`flex size-32 items-center justify-center rounded-2xl bg-(--muted) font-display text-2xl font-semibold tracking-tight text-(--accent) shadow-(--shadow-card) ring-1 ring-(--border) sm:size-36 sm:text-3xl md:size-40 md:text-4xl ${className}`}
      aria-hidden
    >
      PG
    </div>
  )
}
