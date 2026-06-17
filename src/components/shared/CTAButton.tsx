import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'accent' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
  /** Show the trailing arrow that nudges on hover. */
  withArrow?: boolean
}

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-700 shadow-sm shadow-brand/20',
  accent: 'bg-accent text-white hover:bg-accent-600 shadow-sm shadow-accent/25',
  outline: 'border border-line bg-surface text-ink hover:border-brand hover:text-brand',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[0.95rem]',
  lg: 'h-13 px-7 text-base',
}

/** Anchor-based call to action. Used for links to sections / tel: / mailto:. */
export function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = true,
  className,
  ...props
}: CTAButtonProps) {
  return (
    <a
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium',
        'whitespace-nowrap transition-all duration-200 ease-out active:translate-y-px',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {/* Sheen sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/25 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[300%] motion-reduce:hidden"
      />
      <span className="relative inline-flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight
            weight="bold"
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden
          />
        )}
      </span>
    </a>
  )
}
