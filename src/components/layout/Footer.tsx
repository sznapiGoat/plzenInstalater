import { Drop, Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react'
import { company, navLinks, services } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-white">
                <Drop weight="fill" className="size-5 text-accent" aria-hidden />
              </span>
              <span className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
                Plzeňské<span className="text-brand"> Instalace</span>
              </span>
            </div>
            <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-ink-soft">
              {company.slogan}. Instalatérské, topenářské a zemní práce v regionu{' '}
              {company.region}.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Patička — sekce">
            <h3 className="text-sm font-semibold text-ink">Sekce</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-ink">Kontakt</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-brand"
                >
                  <Phone weight="fill" className="size-4 text-accent" aria-hidden />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-brand"
                >
                  <EnvelopeSimple weight="fill" className="size-4 text-accent" aria-hidden />
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin weight="fill" className="size-4 text-accent" aria-hidden />
                {company.street}, {company.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.name}. IČO {company.ico}.
          </p>
          <p className="text-muted/80">
            {services.length} oborů řemesla pod jednou střechou.
          </p>
        </div>
      </div>
    </footer>
  )
}
