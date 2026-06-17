import { stats, aboutFeatures, aboutImage } from '@/data/site'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { FeatureList } from '@/components/shared/FeatureList'
import { Reveal } from '@/components/shared/Reveal'
import { CountUp } from '@/components/shared/CountUp'

export function About() {
  return (
    <section id="o-nas" className="bg-surface-2 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Visual + stats */}
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_60px_-30px_rgba(15,23,42,0.3)]">
              <img
                src={aboutImage}
                alt="Vlastní technika firmy, Volvo nosič s rypadlem JCB"
                className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
                loading="lazy"
              />
            </div>

            <dl className="mt-5 grid grid-cols-3 gap-3">
              {stats.map((stat) => {
                const num = parseInt(stat.value, 10)
                const suffix = stat.value.replace(/[0-9]/g, '')
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-line bg-surface px-4 py-5 text-center"
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-2xl font-semibold text-brand md:text-3xl">
                        <CountUp value={num} suffix={suffix} />
                      </span>
                      <span className="mt-1 block text-xs leading-tight text-muted">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </Reveal>

        {/* Copy + features */}
        <div>
          <Reveal>
            <SectionTitle
              title="Řemeslo, na které je spoleh"
              description="Jsme parta řemeslníků z Plzně, kterou baví práce odvedená pořádně. Spojujeme instalatérské obory se zemními pracemi vlastní technikou, takže celou zakázku držíme v jedněch rukou, od první rýhy po finální dlažbu."
            />
          </Reveal>
          <div className="mt-6">
            <FeatureList items={aboutFeatures} />
          </div>
        </div>
      </div>
    </section>
  )
}
