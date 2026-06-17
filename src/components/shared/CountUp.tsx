import { useEffect, useRef } from 'react'
import { useInView, animate, useReducedMotion } from 'motion/react'

interface CountUpProps {
  /** Target number to count to. */
  value: number
  /** Trailing string, e.g. '+'. */
  suffix?: string
  duration?: number
}

/**
 * Counts from 0 to `value` once it scrolls into view. Writes to the DOM node
 * directly (no per-frame React re-render) and collapses to the final value
 * under prefers-reduced-motion.
 */
export function CountUp({ value, suffix = '', duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (reduce) {
      node.textContent = `${value}${suffix}`
      return
    }
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = `${Math.round(v)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, reduce, value, suffix, duration])

  return <span ref={ref}>{reduce ? `${value}${suffix}` : `0${suffix}`}</span>
}
