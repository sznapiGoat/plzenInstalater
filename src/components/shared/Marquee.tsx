import { Plus } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'

interface MarqueeProps {
  items: string[]
  /** Seconds for one full loop. Lower = faster. */
  speed?: number
}

/**
 * Infinite horizontal marquee. Two identical tracks slide left by exactly one
 * track width for a seamless loop. Under reduced motion it falls back to a
 * static centered wrap. Decorative, so hidden from assistive tech.
 */
export function Marquee({ items, speed = 32 }: MarqueeProps) {
  const reduce = useReducedMotion()

  const Track = () => (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-12">
          <span className="font-display text-base font-medium tracking-tight whitespace-nowrap md:text-lg">
            {item}
          </span>
          <Plus weight="bold" className="size-3.5 shrink-0 text-accent" />
        </span>
      ))}
    </div>
  )

  if (reduce) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4" aria-hidden>
        {items.map((item) => (
          <span key={item} className="font-display text-base font-medium tracking-tight">
            {item}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div
      className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      aria-hidden
    >
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        <Track />
        <Track />
      </motion.div>
    </div>
  )
}
