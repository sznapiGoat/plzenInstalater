import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in seconds. */
  delay?: number
  className?: string
  /** Travel distance on the y axis before settling. */
  y?: number
}

/**
 * Fade + slide-up on scroll into view. Honors prefers-reduced-motion by
 * rendering content statically. Animates only transform/opacity.
 */
export function Reveal({ children, delay = 0, className, y = 22 }: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
