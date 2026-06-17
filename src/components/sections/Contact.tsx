import { useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Phone, EnvelopeSimple, MapPin, Buildings, CheckCircle, ArrowRight } from '@phosphor-icons/react'
import { company, contacts } from '@/data/site'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Reveal } from '@/components/shared/Reveal'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

const details = [
  { icon: Buildings, label: 'Kancelář (pevná linka)', value: company.office, href: company.officeHref },
  { icon: MapPin, label: 'Sídlo', value: `${company.street}, ${company.city}` },
] as const

export function Contact() {
  const reduce = useReducedMotion()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = (data.get('name') as string)?.trim()
    const phone = (data.get('phone') as string)?.trim()
    const message = (data.get('message') as string)?.trim()

    if (!name || !phone || !message) {
      setError('Vyplňte prosím jméno, telefon a popis zakázky.')
      return
    }
    // Demo only — no backend. Simulate a successful send.
    setError(null)
    setSent(true)
  }

  return (
    <section id="kontakt" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Details */}
        <div>
          <Reveal>
            <SectionTitle
              eyebrow="Kontakt"
              title="Pojďme probrat váš projekt"
              description="Potřebujete kvalitní instalatérské služby v oblasti plynových, vodovodních, kanalizačních nebo topenářských prací? Obraťte se na nás, ozveme se a připravíme nezávaznou nabídku."
            />
          </Reveal>

          {/* Call a person directly */}
          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {contacts.map((c, i) => (
              <Reveal key={c.phoneHref} delay={i * 0.06}>
                <li>
                  <a
                    href={c.phoneHref}
                    className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/40"
                  >
                    <span className="font-display text-lg font-semibold text-ink">{c.name}</span>
                    {c.role && <span className="text-xs text-muted">{c.role}</span>}
                    <span className="mt-3 flex items-center gap-2 font-medium text-brand">
                      <Phone weight="fill" className="size-4 text-accent" aria-hidden />
                      {c.phone}
                    </span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>

          {/* E-mail — prominent, full width so the long address never crowds */}
          <Reveal delay={0.12}>
            <a
              href={`mailto:${company.email}`}
              className="group mt-4 flex items-center justify-between gap-4 rounded-2xl border border-brand/25 bg-brand-50/70 p-5 transition-colors hover:border-brand/50"
            >
              <span className="min-w-0">
                <span className="flex items-center gap-2 text-xs font-medium text-muted">
                  <EnvelopeSimple weight="fill" className="size-4 text-accent" aria-hidden />
                  Napište nám e-mail
                </span>
                <span className="mt-1.5 block truncate font-display text-base font-semibold text-brand sm:text-lg">
                  {company.email}
                </span>
              </span>
              <ArrowRight
                weight="bold"
                className="size-5 shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </Reveal>

          {/* Secondary details */}
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {details.map((d, i) => {
              const Icon = d.icon
              const body = (
                <>
                  <dt className="flex items-center gap-2 text-xs font-medium text-muted">
                    <Icon weight="fill" className="size-4 text-accent" aria-hidden />
                    {d.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">{d.value}</dd>
                </>
              )
              return (
                <Reveal key={d.label} delay={i * 0.06}>
                  {'href' in d && d.href ? (
                    <a
                      href={d.href}
                      className="block h-full rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/40"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="h-full rounded-2xl border border-line bg-surface p-5">{body}</div>
                  )}
                </Reveal>
              )
            })}
          </dl>
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <div className="rounded-[1.75rem] border border-line bg-surface-2 p-6 sm:p-9">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[24rem] flex-col items-center justify-center text-center"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-brand-50 text-brand">
                    <CheckCircle weight="duotone" className="size-9" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                    Děkujeme, máme to!
                  </h3>
                  <p className="mt-2 max-w-sm text-ink-soft">
                    Poptávka dorazila. Ozveme se vám do druhého pracovního dne na zadaný
                    telefon. (Toto je demo, formulář nic neodesílá.)
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSent(false)}
                  >
                    Zpět na formulář
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col gap-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-ink">
                        Jméno a příjmení
                      </label>
                      <Input id="name" name="name" placeholder="Jan Novák" autoComplete="name" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-ink">
                        Telefon
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+420 …"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-ink">
                      E-mail <span className="font-normal text-muted">(nepovinné)</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jan@email.cz"
                      autoComplete="email"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-ink">
                      Popis zakázky
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Co potřebujete udělat? Např. nová přípojka vody a plynu pro novostavbu…"
                    />
                  </div>

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        role="alert"
                        initial={reduce ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm font-medium text-accent-600"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" variant="accent" size="lg">
                      Odeslat poptávku
                    </Button>
                    <p className="text-xs text-muted">
                      Odesláním souhlasíte se zpracováním údajů pro vyřízení poptávky.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
