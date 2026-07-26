import { site } from '../../site/content'

export function Avatar({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative isolate size-32 overflow-hidden rounded-2xl bg-(--muted) shadow-(--shadow-card) ring-1 ring-(--border) sm:size-36 md:size-40 ${className}`}
      role="img"
      aria-label={`${site.name} profile illustration`}
      data-avatar-3d-root
    >
      <img
        src="/avatar-static.jpg"
        alt=""
        width="160"
        height="160"
        decoding="async"
        fetchPriority="high"
        className="avatar-static-fallback size-full object-cover"
      />
    </div>
  )
}
