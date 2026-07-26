/** Lightweight decorative system map with no runtime animation or canvas work. */
export function SkillsMiniScene({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none relative h-28 w-full select-none text-(--accent) sm:h-32 ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 360 180"
        className="size-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.5" opacity="0.24">
          <path d="M42 126 112 76l72 35 80-65 54 38" />
          <path d="m42 126 83 10 59-25 58 35 76-62" strokeDasharray="5 7" />
          <circle cx="42" cy="126" r="5" fill="currentColor" />
          <circle cx="112" cy="76" r="5" fill="currentColor" />
          <circle cx="184" cy="111" r="5" fill="currentColor" />
          <circle cx="264" cy="46" r="5" fill="currentColor" />
          <circle cx="318" cy="84" r="5" fill="currentColor" />
        </g>

        <g stroke="currentColor" strokeWidth="2">
          <path
            d="m82 49 27 15v31l-27 15-27-15V64l27-15Z"
            fill="currentColor"
            fillOpacity="0.12"
          />
          <path
            d="m211 54 24 14v28l-24 14-24-14V68l24-14Z"
            fill="currentColor"
            fillOpacity="0.18"
          />
          <path
            d="m279 105 22 13v25l-22 13-22-13v-25l22-13Z"
            fill="currentColor"
            fillOpacity="0.1"
          />
        </g>

        <g fill="currentColor">
          <circle cx="146" cy="42" r="3" opacity="0.55" />
          <circle cx="236" cy="133" r="2.5" opacity="0.42" />
          <circle cx="328" cy="38" r="3.5" opacity="0.35" />
          <circle cx="52" cy="35" r="2" opacity="0.45" />
          <circle cx="157" cy="148" r="3" opacity="0.3" />
        </g>
      </svg>
    </div>
  )
}
