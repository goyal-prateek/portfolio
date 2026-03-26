import { lazy, Suspense } from 'react'
import { site } from '../../site/content'

const AvatarModel = lazy(async () => {
  const m = await import('./AvatarModel')
  return { default: m.AvatarModel }
})

export function Avatar({ className = '' }: { className?: string }) {
  return (
    <Suspense
      fallback={
        <div
          className={`flex size-32 items-center justify-center rounded-2xl bg-(--muted) font-display text-2xl font-semibold tracking-tight text-(--accent) shadow-(--shadow-card) ring-1 ring-(--border) sm:size-36 sm:text-3xl md:size-40 md:text-4xl ${className}`}
          aria-hidden
        >
          PG
        </div>
      }
    >
      <AvatarModel
        className={`size-32 sm:size-36 md:size-40 ${className}`}
        ariaLabel={`${site.name} 3D profile model`}
      />
    </Suspense>
  )
}
