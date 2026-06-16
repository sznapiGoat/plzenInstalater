import { motion, useReducedMotion } from 'motion/react'
import { MapPin, ShieldCheck } from '@phosphor-icons/react'
import { company, heroImage } from '@/data/site'
import { CTAButton } from '@/components/shared/CTAButton'

export function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09 } },
  }
  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
      }

  return (
    <section id="top" className="relative overflow-hidden bg-surface">
      {/* Subtle technical backdrop — blueprint grid + soft brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-[36rem] rounded-full bg-brand/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-24">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-soft"
          >
            <MapPin weight="fill" className="size-4 text-accent" aria-hidden />
            {company.region}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Voda, plyn a topení.{' '}
            <span className="text-brand">Hotovo</span>{' '}
            <span className="text-accent">napoprvé.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-soft"
          >
            Instalatérské a topenářské práce i výkopy vlastní technikou JCB a Volvo.
            Od přípojky po dlažbu kolem domu, vše od jedné party.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <CTAButton href="#kontakt" variant="accent" size="lg">
              Nezávazná poptávka
            </CTAButton>
            <CTAButton href="#sluzby" variant="outline" size="lg" withArrow={false}>
              Naše služby
            </CTAButton>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          className="relative"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)]">
            <img
              src={heroImage}
              alt="Dokončený rodinný dům s novou zámkovou dlažbou od Plzeňských Instalací"
              className="aspect-[5/4] w-full object-cover sm:aspect-[16/11]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/25 to-transparent" aria-hidden />
          </div>

          {/* One floating info card — real info, not decoration */}
          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-lg backdrop-blur sm:-left-6">
            <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand">
              <ShieldCheck weight="duotone" className="size-6" aria-hidden />
            </span>
            <div className="leading-tight">
              <p className="font-display text-xl font-semibold text-ink">15+ let</p>
              <p className="text-xs text-muted">zkušeností v oboru</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
