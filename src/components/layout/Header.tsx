import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Drop, List, X, Phone } from '@phosphor-icons/react'
import { company, navLinks } from '@/data/site'
import { CTAButton } from '@/components/shared/CTAButton'
import { cn } from '@/lib/utils'

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-white">
        <Drop weight="fill" className="size-5 text-accent" aria-hidden />
      </span>
      <span className="font-display text-[1.05rem] font-semibold leading-none tracking-tight text-ink">
        Plzeňské
        <span className="text-brand"> Instalace</span>
      </span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Logo />

        {/* Desktop nav — single line */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hlavní navigace">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
          >
            <Phone weight="fill" className="size-4 text-accent" aria-hidden />
            {company.phone}
          </a>
          <CTAButton href="#kontakt" variant="accent" size="sm" withArrow={false}>
            Nezávazná poptávka
          </CTAButton>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
        >
          {open ? <X className="size-6" /> : <List className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-line lg:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav
              className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
              aria-label="Mobilní navigace"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-lg px-3 py-3 text-base font-medium text-ink-soft',
                    'transition-colors hover:bg-surface-2 hover:text-brand',
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={company.phoneHref}
                className="mt-2 flex items-center gap-2 px-3 py-2 font-semibold text-ink"
              >
                <Phone weight="fill" className="size-4 text-accent" aria-hidden />
                {company.phone}
              </a>
              <CTAButton
                href="#kontakt"
                variant="accent"
                onClick={() => setOpen(false)}
                className="mt-2 w-full"
                withArrow={false}
              >
                Nezávazná poptávka
              </CTAButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
