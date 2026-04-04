import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck } from 'lucide-react';
import { cn } from '../lib/utils';
import { navigation, publicContact, site } from '../data/site';

function MenuIcon({ open }) {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        href="#main-content"
      >
        Skip to main content
      </a>

      <div className="site-container py-4 lg:py-5">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="flex items-start justify-between gap-4">
            <Link
              className="group inline-flex max-w-xl items-start gap-3 leading-tight"
              onClick={closeMenu}
              to="/"
            >
              <Truck className="mt-1 h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5" />
              <div className="min-w-0">
                <div className="text-xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-[1.35rem]">
                  {site.displayName}
                </div>
                <div className="mt-1 text-sm leading-relaxed text-slate-600">
                  {site.officeLabel}. Austin-area moving, packing, storage, and long-distance work.
                </div>
              </div>
            </Link>

            <button
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition-colors hover:border-slate-900 md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              type="button"
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>

          <div className="hidden md:flex md:flex-col md:items-end md:gap-3 xl:flex-row xl:items-center xl:gap-8">
            <nav aria-label="Primary" className="min-w-0">
              <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.to}>
                    <Link
                      className={cn(
                        'transition-colors',
                        location.pathname === item.to
                          ? 'font-semibold text-slate-900'
                          : 'text-slate-600 hover:text-slate-900',
                      )}
                      onClick={closeMenu}
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col items-end text-right">
              {publicContact.hasPhone ? (
                <a
                  className="text-base font-semibold text-slate-900 transition-colors hover:text-accent"
                  href={publicContact.phoneHref}
                >
                  {site.phone.display}
                </a>
              ) : (
                <Link
                  className="text-base font-semibold text-slate-900 transition-colors hover:text-accent"
                  to="/contact"
                >
                  Talk through your move
                </Link>
              )}
              <Link
                className="mt-1 text-sm text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
                to="/quote"
              >
                Start a written estimate
              </Link>
            </div>
          </div>
        </div>

        {mobileOpen ? (
          <div className="mt-5 border-t border-slate-200 pt-5 md:hidden">
            <nav aria-label="Mobile primary">
              <ul className="grid gap-3 text-base">
                {navigation.map((item) => (
                  <li key={item.to}>
                    <Link
                      className={cn(
                        'block',
                        location.pathname === item.to
                          ? 'font-semibold text-slate-900'
                          : 'text-slate-600',
                      )}
                      onClick={closeMenu}
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-5 border-t border-slate-200 pt-4 text-sm">
              <p className="text-slate-600">
                {site.officeLabel} • {site.hours.summary}
              </p>

              <div className="mt-4 flex flex-col gap-2">
                {publicContact.hasPhone ? (
                  <a
                    className="font-semibold text-slate-900"
                    href={publicContact.phoneHref}
                    onClick={closeMenu}
                  >
                    Call {site.phone.display}
                  </a>
                ) : (
                  <Link
                    className="font-semibold text-slate-900"
                    onClick={closeMenu}
                    to="/contact"
                  >
                    Talk through your move
                  </Link>
                )}
                <Link
                  className="text-slate-600 underline decoration-slate-300 underline-offset-4"
                  onClick={closeMenu}
                  to="/quote"
                >
                  Request a written estimate
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
