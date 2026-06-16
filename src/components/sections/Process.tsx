import { processSteps } from '@/data/site'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Reveal } from '@/components/shared/Reveal'

export function Process() {
  return (
    <section id="postup" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionTitle
            title="Jak probíhá spolupráce"
            description="Čtyři přehledné kroky od prvního telefonu po předání hotového díla. Vždy víte, co se děje a kdy."
            align="center"
            className="mx-auto max-w-2xl"
          />
        </Reveal>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Connector line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block"
          />

          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative flex flex-col">
                <span className="flex size-14 items-center justify-center rounded-2xl border border-line bg-surface font-display text-xl font-semibold text-brand shadow-[0_8px_20px_-12px_rgba(29,78,216,0.4)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
