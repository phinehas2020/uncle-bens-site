import { Link } from 'react-router-dom';
import { BrandSeal, AddressStamp } from './BrandMark';
import { navigation, publicContact, site } from '../data/site';

const serviceLinks = [
  { to: '/services#local-moving', label: 'Local moving' },
  { to: '/services#long-distance', label: 'Long-distance' },
  { to: '/services#packing', label: 'Packing' },
  { to: '/services#storage', label: 'Storage' },
  { to: '/services#commercial-moving', label: 'Commercial' },
];

const resourceLinks = [
  { to: '/pricing', label: 'Pricing guide' },
  { to: '/service-areas', label: 'Service areas' },
  { to: '/austin-top-movers', label: 'Top Austin movers' },
  { to: '/faq', label: 'FAQ' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden bg-[var(--color-ink)] text-[var(--color-cream)] grain">
      {/* Enormous display mark bleeding off the top-right — the kind of thing a designer would do */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-16 opacity-[0.07]">
        <BrandSeal size={420} color="var(--color-cream)" />
      </div>

      <div className="wrap relative py-16 lg:py-24">
        {/* CTA band */}
        <div className="grid gap-8 border-b border-white/12 pb-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow" style={{ color: 'var(--color-brand-soft)' }}>
              <span className="inline-block h-px w-7 bg-[var(--color-brand)]" />
              Ready when you are
            </p>
            <h2 className="display-lg mt-5 text-balance" style={{ color: 'var(--color-cream)' }}>
              Let's scope your move before we ever price it.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              A fifteen-minute walkthrough — in person or virtual — is the single
              best predictor of a smooth move day. It's free, and the written
              estimate is yours to keep either way.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <Link to="/quote" className="btn btn-brand">
              Request a written estimate
              <span aria-hidden="true" className="ml-0.5">→</span>
            </Link>
            {publicContact.hasPhone ? (
              <a
                href={publicContact.phoneHref}
                className="text-lg font-medium text-white hover:text-[var(--color-brand-soft)]"
              >
                Or call {site.phone.display}
              </a>
            ) : (
              <Link to="/contact" className="text-lg font-medium text-white hover:text-[var(--color-brand-soft)]">
                Or talk through your move
              </Link>
            )}
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-10 pt-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <BrandSeal size={64} color="var(--color-cream)" className="shrink-0" />
              <div className="leading-tight">
                <p className="font-display text-[1.6rem] tracking-[-0.02em]">{site.displayName}</p>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.2em] text-white/55">
                  Movers · packers · neighbors
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
              {site.tagline}
            </p>

            <div className="mt-6 grid gap-1.5 text-sm">
              {publicContact.hasPhone ? (
                <a className="font-medium text-white hover:text-[var(--color-brand-soft)]" href={publicContact.phoneHref}>
                  {site.phone.display}
                </a>
              ) : null}
              {publicContact.hasEmail ? (
                <a className="text-white/75 hover:text-white" href={publicContact.emailHref}>
                  {site.email}
                </a>
              ) : null}
              {site.address ? (
                <address className="not-italic text-white/65">
                  {site.address.street}<br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </address>
              ) : (
                <p className="text-white/65">Serving Austin, Round Rock, and Central Texas.</p>
              )}
              <p className="mt-1 text-white/65">{site.hours.summary}</p>
            </div>
          </div>

          <nav aria-label="Services">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/50">Services</p>
            <ul className="mt-4 grid gap-2.5 text-sm text-white/80">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/50">Company</p>
            <ul className="mt-4 grid gap-2.5 text-sm text-white/80">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/50">Resources</p>
            <ul className="mt-4 grid gap-2.5 text-sm text-white/80">
              {resourceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Signature block */}
        <div className="mt-16 border-t border-white/12 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <AddressStamp className="text-white/70" />
            <p className="font-display text-[0.95rem] italic text-white/70">
              Made with care, block by block, across Central Texas.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} {site.copyrightLabel}</p>
            <p className="tnum">{site.license}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
