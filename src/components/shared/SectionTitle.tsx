import { cn } from '@/lib/utils'

interface SectionTitleProps {
  /** Optional small label above the heading. Use sparingly (max ~1 per 3 sections). */
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

/** Section heading block: optional eyebrow, display title, optional lead paragraph. */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          <span className="h-px w-6 bg-accent" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.6rem] md:leading-[1.08]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-ink-soft leading-relaxed max-w-[58ch]',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
