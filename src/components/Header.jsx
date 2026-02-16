import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { navigation, site } from '../data/site';
import { ButtonLink } from './Button';
import { preloadRoute } from '../lib/routeLoader';

function MenuIcon({ open }) {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path
        d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
      />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-header border-b transition-all duration-300',
        scrolled
          ? 'border-gold/30 bg-obsidian/88 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl'
          : 'border-transparent bg-obsidian/36',
      )}
    >
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-header focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-obsidian"
        href="#main-content"
      >
        Skip to main content
      </a>

      <div className="layout-container">
        <nav className="flex h-[4.8rem] items-center justify-between">
          <Link className="group flex items-center gap-3" to="/">
            <div className="brand-mark transition-transform group-hover:-translate-y-0.5">QM</div>
            <div className="leading-none">
              <p className="font-family-display text-[1.3rem] font-semibold tracking-[0.03em] text-white">
                {site.shortName}
              </p>
              <p className="brand-kicker">
                Austin • Round Rock • Central Texas
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                className={cn(
                  'rounded-full px-3 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.15em] text-cloud transition-all hover:bg-night/75 hover:text-gold-soft',
                  location.pathname === item.to && 'bg-night/90 text-gold',
                )}
                onFocus={() => preloadRoute(item.to)}
                onMouseEnter={() => preloadRoute(item.to)}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href={`tel:${site.phone.digits}`} size="sm" variant="ghost">
              {site.phone.display}
            </ButtonLink>
            <ButtonLink
              onFocus={() => preloadRoute('/quote')}
              onMouseEnter={() => preloadRoute('/quote')}
              size="sm"
              to="/quote"
              variant="primary"
            >
              Start My Move
            </ButtonLink>
          </div>

          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-content-center rounded-xl border border-gold/35 bg-night/85 text-cloud transition-colors hover:text-white lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            type="button"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-t border-gold/25 bg-obsidian/96 pb-6 pt-3 backdrop-blur-xl lg:hidden">
          <div className="layout-container space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.to}
                className={cn(
                  'block rounded-xl border border-transparent px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-cloud transition-colors hover:border-gold/35 hover:text-white',
                  location.pathname === item.to && 'border-gold/40 bg-night/80 text-white',
                )}
                onFocus={() => preloadRoute(item.to)}
                onClick={() => setMobileOpen(false)}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-2 pt-3">
              <ButtonLink
                href={`tel:${site.phone.digits}`}
                onClick={() => setMobileOpen(false)}
                size="sm"
                variant="ghost"
              >
                Call Now
              </ButtonLink>
              <ButtonLink
                onClick={() => setMobileOpen(false)}
                onFocus={() => preloadRoute('/quote')}
                size="sm"
                to="/quote"
                variant="primary"
              >
                Get Quote
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
