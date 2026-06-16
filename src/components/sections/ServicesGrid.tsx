import { services } from '@/data/site'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { Reveal } from '@/components/shared/Reveal'

export function ServicesGrid() {
  return (
    <section id="sluzby" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Co děláme"
            title="Sedm řemesel, jedna parta"
            description="Od plynové přípojky přes topení až po dlažbu kolem domu. Nemusíte shánět tři firmy, vše vyřešíme společně a navazujeme práce tak, aby na sebe seděly."
            className="max-w-2xl"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.id}
              delay={i * 0.05}
              className={service.featured ? 'lg:col-span-2 h-full' : 'h-full'}
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
