import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { navigation, site } from '../data/site';
import { ButtonLink } from './Button';

function MenuIcon({ open }) {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path
        d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-white"
        href="#main-content"
      >
        Skip to main content
      </a>

      <div className="site-container flex items-center justify-between gap-4 py-3">
        <Link
          className="inline-flex flex-col leading-tight"
          onClick={() => setMobileOpen(false)}
          to="/"
        >
          <span className="text-base font-semibold text-white sm:text-lg">{site.name}</span>
          <span className="text-xs text-slate-300">Austin TX movers since {site.yearFounded}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  className={cn(
                    'px-3 py-2 text-sm text-slate-200 hover:text-white',
                    location.pathname === item.to &&
                      'rounded-md bg-slate-800 font-semibold text-white',
                  )}
                  onClick={() => setMobileOpen(false)}
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink
            className="border-slate-700 text-white hover:bg-slate-800"
            href={`tel:${site.phone.digits}`}
            size="sm"
            variant="ghost"
          >
            {site.phone.display}
          </ButtonLink>
          <ButtonLink className="bg-accent text-white hover:bg-accent/85 border-accent" size="sm" to="/contact" variant="primary">
            Get a Quote
          </ButtonLink>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          type="button"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-slate-800 transition-[max-height] duration-200 md:hidden',
          mobileOpen ? 'max-h-[360px]' : 'max-h-0',
        )}
      >
        <div className="site-container flex flex-col gap-2 py-3">
          {navigation.map((item) => (
            <Link
              className={cn(
                'rounded-md px-3 py-2 text-sm text-slate-200 hover:text-white',
                location.pathname === item.to && 'bg-slate-800 font-semibold text-white',
              )}
              key={item.to}
              onClick={() => setMobileOpen(false)}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-wrap gap-2 pt-1">
            <ButtonLink
              className="border-slate-700 text-white hover:bg-slate-800"
              href={`tel:${site.phone.digits}`}
              onClick={() => setMobileOpen(false)}
              size="sm"
              variant="ghost"
            >
              Call us
            </ButtonLink>
            <ButtonLink
              className="bg-accent text-white border-accent hover:bg-accent/85"
              onClick={() => setMobileOpen(false)}
              size="sm"
              to="/contact"
              variant="primary"
            >
              Get a Quote
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
