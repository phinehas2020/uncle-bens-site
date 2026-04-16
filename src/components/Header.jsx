import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { navigation, publicContact, site } from '../data/site';

function Wordmark({ onClick, className = '' }) {
  return (
    <Link onClick={onClick} to="/" className={cn('group inline-flex items-baseline gap-2.5', className)} aria-label={`${site.displayName} — home`}>
      <span
        aria-hidden="true"
        className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
        style={{ background: 'var(--color-brand)' }}
      />
      <span className="font-display text-[1.375rem] leading-none tracking-[-0.025em] text-[var(--color-ink)] sm:text-2xl">
        {site.shortName}
      </span>
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMobileOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-[background,backdrop-filter,border-color] duration-200',
        scrolled
          ? 'border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-cream)_92%,transparent)] backdrop-blur-md'
          : 'border-b border-transparent bg-[var(--color-cream)]',
      )}
    >
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-[var(--color-cream)]"
        href="#main-content"
      >
        Skip to main content
      </a>

      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-20">
        <Wordmark onClick={closeMenu} />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[0.9375rem]">
            {navigation.map((item) => {
              const active = location.pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    className={cn(
                      'relative py-1 transition-colors',
                      active
                        ? 'text-[var(--color-ink)] font-medium'
                        : 'text-[var(--color-stone)] hover:text-[var(--color-ink)]',
                    )}
                    to={item.to}
                  >
                    {item.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-0 h-[2px] w-full"
                        style={{ background: 'var(--color-brand)' }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {publicContact.hasPhone ? (
            <a
              className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-[var(--color-ink)] hover:text-[var(--color-brand)]"
              href={publicContact.phoneHref}
            >
              <Phone aria-hidden="true" className="h-4 w-4" style={{ color: 'var(--color-brand)' }} />
              {site.phone.display}
            </a>
          ) : null}
          <Link to="/quote" className="btn btn-primary btn-sm">
            Get a free quote
          </Link>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-ink)] md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          type="button"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="md:hidden">
          <div className="wrap border-t border-[var(--color-line)] pb-8 pt-6">
            <nav aria-label="Mobile primary">
              <ul className="grid gap-1 text-lg">
                {navigation.map((item) => {
                  const active = location.pathname === item.to;
                  return (
                    <li key={item.to}>
                      <Link
                        className={cn(
                          'flex items-center justify-between py-3 border-b border-[var(--color-line)]',
                          active ? 'font-medium text-[var(--color-ink)]' : 'text-[var(--color-graphite)]',
                        )}
                        onClick={closeMenu}
                        to={item.to}
                      >
                        <span>{item.label}</span>
                        <span aria-hidden="true" className="text-[var(--color-dust)]">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <Link to="/quote" onClick={closeMenu} className="btn btn-primary w-full">
                Get a free quote
              </Link>
              {publicContact.hasPhone ? (
                <a
                  className="btn btn-ghost w-full"
                  href={publicContact.phoneHref}
                  onClick={closeMenu}
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  Call {site.phone.display}
                </a>
              ) : (
                <Link to="/contact" onClick={closeMenu} className="btn btn-ghost w-full">
                  Talk through your move
                </Link>
              )}
            </div>

            <p className="mt-6 text-sm text-[var(--color-stone)]">
              {site.officeLabel} · {site.hours.summary}
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
