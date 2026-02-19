import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { navigation, site } from '../data/site';
import { ButtonLink } from './Button';
import { Truck } from 'lucide-react';

function MenuIcon({ open }) {
  return (
    <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20 py-2 sm:py-3"
          : "bg-slate-950 border-transparent py-4 sm:py-5"
      )}
    >
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        href="#main-content"
      >
        Skip to main content
      </a>

      <div className="site-container flex items-center justify-between gap-4">
        <Link
          className="group inline-flex items-center gap-3 leading-tight"
          onClick={() => setMobileOpen(false)}
          to="/"
        >
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20 group-hover:bg-accent-dark transition-colors">
            <Truck className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-tight">{site.name}</span>
            <span className="text-[0.65rem] uppercase tracking-widest text-slate-400 font-semibold">Austin TX • Est. {site.yearFounded}</span>
          </div>
        </Link>

        <nav className="hidden items-center md:flex bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  className={cn(
                    'px-4 py-2 text-sm font-medium transition-colors rounded-full',
                    location.pathname === item.to
                      ? 'bg-white/10 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5',
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

        <div className="hidden items-center gap-3 md:flex">
          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-2"
            href={`tel:${site.phone.digits}`}
          >
            {site.phone.display}
          </a>
          <ButtonLink
            className="bg-accent text-white hover:bg-accent-dark border-accent rounded-full px-6 shadow-lg shadow-accent/20"
            size="sm"
            to="/contact"
            variant="primary"
          >
            Get a Quote
          </ButtonLink>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-200 md:hidden transition-colors hover:bg-white/10"
          onClick={() => setMobileOpen((prev) => !prev)}
          type="button"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-white/10 transition-[max-height] duration-300 ease-in-out md:hidden bg-slate-950/95 backdrop-blur-xl absolute top-full left-0 right-0',
          mobileOpen ? 'max-h-[400px] shadow-2xl shadow-black/50' : 'max-h-0',
        )}
      >
        <div className="site-container flex flex-col gap-2 py-5">
          {navigation.map((item) => (
            <Link
              className={cn(
                'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                location.pathname === item.to
                  ? 'bg-accent/10 text-accent border border-accent/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5',
              )}
              key={item.to}
              onClick={() => setMobileOpen(false)}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/10">
            <ButtonLink
              className="bg-accent text-white border-accent hover:bg-accent-dark rounded-xl"
              onClick={() => setMobileOpen(false)}
              size="md"
              to="/contact"
              variant="primary"
            >
              Get a Quote
            </ButtonLink>
            <ButtonLink
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl"
              href={`tel:${site.phone.digits}`}
              onClick={() => setMobileOpen(false)}
              size="md"
              variant="secondary"
            >
              Call {site.phone.display}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
