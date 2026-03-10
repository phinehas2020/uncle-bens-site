import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck } from 'lucide-react';
import { cn } from '../lib/utils';
import { navigation, site } from '../data/site';
import { ButtonLink } from './Button';

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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        href="#main-content"
      >
        Skip to main content
      </a>

      <div className="site-container flex items-center justify-between gap-4 py-4">
        <Link className="group inline-flex items-center gap-3 leading-tight" onClick={closeMenu} to="/">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-[#faf8f5] text-accent transition-colors group-hover:border-slate-300">
            <Truck className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-slate-900">{site.name}</span>
            <span className="text-sm text-slate-600">Round Rock, Texas</span>
          </div>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  className={cn(
                    'text-sm font-medium transition-colors',
                    location.pathname === item.to
                      ? 'text-slate-900 underline decoration-accent underline-offset-8'
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

        <div className="hidden items-center gap-3 md:flex">
          <a
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            href={`tel:${site.phone.digits}`}
          >
            {site.phone.display}
          </a>
          <ButtonLink size="sm" to="/contact" variant="primary">
            Request an estimate
          </ButtonLink>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-300 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          type="button"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {mobileOpen ? (
        <div className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white md:hidden">
          <div className="site-container flex flex-col gap-2 py-5">
            {navigation.map((item) => (
              <Link
                className={cn(
                  'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                  location.pathname === item.to
                    ? 'bg-[#faf8f5] text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                )}
                key={item.to}
                onClick={closeMenu}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 flex flex-col gap-3 border-t border-slate-200 pt-4">
              <ButtonLink onClick={closeMenu} size="md" to="/contact" variant="primary">
                Request an estimate
              </ButtonLink>
              <ButtonLink
                className="justify-center"
                href={`tel:${site.phone.digits}`}
                onClick={closeMenu}
                size="md"
                variant="secondary"
              >
                Call {site.phone.display}
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
