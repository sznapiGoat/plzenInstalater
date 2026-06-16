import { ArrowUpRight } from '@phosphor-icons/react'
import type { Service } from '@/data/site'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  service: Service
}

/**
 * Bento tile for a single service. Featured tiles span two columns on desktop
 * and carry a blue field; the rest are clean white tiles. Hover lifts the tile
 * and reveals the corner arrow.
 */
export function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, icon: Icon, featured } = service

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border p-7 transition-all duration-300',
        'hover:-translate-y-1',
        featured
          ? 'border-brand-700/40 bg-brand text-white lg:col-span-2 shadow-sm shadow-brand/25'
          : 'border-line bg-surface text-ink hover:border-brand/40 hover:shadow-[0_12px_30px_-12px_rgba(29,78,216,0.25)]',
      )}
    >
      <ArrowUpRight
        weight="bold"
        className={cn(
          'absolute right-6 top-6 size-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
          featured ? 'text-white/90' : 'text-brand',
        )}
        aria-hidden
      />

      <span
        className={cn(
          'mb-6 flex size-12 items-center justify-center rounded-xl transition-colors',
          featured ? 'bg-white/15 text-white' : 'bg-accent-50 text-accent',
        )}
      >
        <Icon weight="duotone" className="size-6" aria-hidden />
      </span>

      <h3
        className={cn(
          'font-display text-lg font-semibold tracking-tight',
          featured ? 'text-white md:text-2xl' : 'text-ink',
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          'mt-2 text-sm leading-relaxed',
          featured ? 'text-white/85 md:max-w-[46ch] md:text-[0.95rem]' : 'text-ink-soft',
        )}
      >
        {description}
      </p>
    </article>
  )
}
