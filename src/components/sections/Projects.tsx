import { gallery, testimonial } from '@/data/site'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { CTAButton } from '@/components/shared/CTAButton'
import { Reveal } from '@/components/shared/Reveal'

export function Projects() {
  return (
    <section id="realizace" className="bg-surface-2 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle
              title="Vybrané realizace"
              description="Vlastní vozový park, technika JCB a Volvo a hotové stavby v okolí Plzně. Fotografie z reálných zakázek."
              className="max-w-xl"
            />
            <CTAButton href="#kontakt" variant="outline" withArrow className="shrink-0">
              Chci podobnou realizaci
            </CTAButton>
          </div>
        </Reveal>

        {/* Uniform photo grid — 9 photos fill a clean 3×3 on desktop */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.07}>
              <figure className="group overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-medium text-ink-soft">
                  {item.tag}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Testimonial — full-width quote band (distinct layout family) */}
        <Reveal>
          <figure className="mt-16 rounded-[1.75rem] bg-brand px-8 py-12 text-white md:px-14 md:py-16">
            <blockquote className="mx-auto max-w-3xl text-center font-display text-xl font-medium leading-snug tracking-tight md:text-3xl md:leading-snug">
              <span className="text-accent">„</span>
              {testimonial.quote}
              <span className="text-accent">“</span>
            </blockquote>
            <figcaption className="mt-7 text-center text-sm text-white/80">
              <span className="font-semibold text-white">{testimonial.name}</span>
              {' · '}
              {testimonial.role}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
