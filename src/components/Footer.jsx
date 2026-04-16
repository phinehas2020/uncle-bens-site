import { Link } from 'react-router-dom';
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
    <footer className="mt-16 bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="wrap py-16 lg:py-20">
        {/* CTA band */}
        <div className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow" style={{ color: 'var(--color-brand-soft)' }}>
              <span className="inline-block h-px w-7 bg-[var(--color-brand)]" />
              Ready to move?
            </p>
            <h2 className="display-lg mt-5 text-balance" style={{ color: 'var(--color-cream)' }}>
              Let's scope your move before we ever price it.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              A 15-minute walkthrough — in person or virtual — is the single best
              predictor of a smooth move day. It is free, and the written estimate
              is yours to keep either way.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <Link to="/quote" className="btn btn-brand">
              Request a written estimate
              <span aria-hidden="true">→</span>
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
        <div className="grid gap-10 pt-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2.5">
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: 'var(--color-brand)' }} />
              <span className="font-display text-2xl leading-none tracking-[-0.02em]">{site.displayName}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
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
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.15em] text-white/50">Services</p>
            <ul className="mt-4 grid gap-2.5 text-sm text-white/80">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.15em] text-white/50">Company</p>
            <ul className="mt-4 grid gap-2.5 text-sm text-white/80">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white">{item.label}</Link>
                </li>
              ))}
              <li><Link to="/" className="hover:text-white">Home</Link></li>
            </ul>
          </nav>

          <nav aria-label="Resources">
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.15em] text-white/50">Resources</p>
            <ul className="mt-4 grid gap-2.5 text-sm text-white/80">
              {resourceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {site.copyrightLabel}. All rights reserved.</p>
          <p className="tnum">{site.license}</p>
        </div>
      </div>
    </footer>
  );
}
