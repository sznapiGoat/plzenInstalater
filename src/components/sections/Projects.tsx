import { projects, testimonial } from '@/data/site'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { CTAButton } from '@/components/shared/CTAButton'
import { Reveal } from '@/components/shared/Reveal'

/** picsum height per tile span — drives the masonry rhythm. */
const heightFor: Record<(typeof projects)[number]['span'], number> = {
  tall: 880,
  wide: 540,
  normal: 660,
}

export function Projects() {
  return (
    <section id="realizace" className="bg-surface-2 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle
              title="Vybrané realizace"
              description="Ukázka prací z okolí Plzně. Fotografie jsou ilustrativní a snadno je nahradíte vlastními."
              className="max-w-xl"
            />
            <CTAButton href="#kontakt" variant="outline" withArrow className="shrink-0">
              Chci podobnou realizaci
            </CTAButton>
          </div>
        </Reveal>

        {/* Masonry via CSS columns — captions sit below each image, never overlaid */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {projects.map((project, i) => (
            <Reveal key={project.seed} delay={(i % 3) * 0.08}>
              <figure className="group break-inside-avoid overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
                <div className="overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${project.seed}/800/${heightFor[project.span]}`}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
                  <span className="font-medium text-ink">{project.title}</span>
                  <span className="shrink-0 rounded-full bg-accent-50 px-2.5 py-1 text-xs font-semibold text-accent-600">
                    {project.tag}
                  </span>
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
