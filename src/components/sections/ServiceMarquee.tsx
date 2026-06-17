import { services } from '@/data/site'
import { Marquee } from '@/components/shared/Marquee'

const items = [
  ...services.map((s) => s.title),
  'Pohotovost plyn nonstop',
  'Strojní čištění kanalizací',
]

/** Thin brand band that streams the company's service keywords. */
export function ServiceMarquee() {
  return (
    <div className="border-y border-brand-700/30 bg-brand py-4 text-white">
      <Marquee items={items} />
    </div>
  )
}
