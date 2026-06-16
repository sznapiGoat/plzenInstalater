import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/** Surface container. Tinted (not pure-black) shadow, single radius scale. */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-card)] border border-line bg-surface',
        'shadow-[0_1px_2px_rgba(15,23,42,0.04)]',
        className,
      )}
      {...props}
    />
  )
}
