import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Extra delay after the block enters the viewport (for staggered lists). */
  delayMs?: number
}

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          observer.unobserve(el)
          if (delayMs > 0) {
            timeoutId = setTimeout(() => setVisible(true), delayMs)
          } else {
            setVisible(true)
          }
          break
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timeoutId !== undefined) clearTimeout(timeoutId)
    }
  }, [delayMs])

  return (
    <div
      ref={ref}
      className={`reveal-scroll${visible ? ' reveal-scroll--visible' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}
