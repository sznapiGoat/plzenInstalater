import { Check } from '@phosphor-icons/react'
import { Reveal } from './Reveal'

interface Feature {
  title: string
  description: string
}

interface FeatureListProps {
  items: readonly Feature[]
}

/** Vertical list of value points, each with a brand check marker. Staggered reveal. */
export function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="flex flex-col divide-y divide-line">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.07}>
          <li className="flex gap-4 py-5">
            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
              <Check weight="bold" className="size-4" aria-hidden />
            </span>
            <div>
              <h3 className="font-medium text-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          </li>
        </Reveal>
      ))}
    </ul>
  )
}
