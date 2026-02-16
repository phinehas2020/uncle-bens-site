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
      setScrolled(window.scrollY > 14);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-header border-b transition-all duration-300',
        scrolled ? 'border-carbon bg-obsidian/96 shadow-sm backdrop-blur-md' : 'border-transparent bg-obsidian/90',
      )}
    >
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-header focus:rounded-lg focus:bg-night focus:px-3 focus:py-2 focus:text-obsidian"
        href="#main-content"
      >
        Skip to main content
      </a>

      <div className="layout-container">
        <nav className="flex h-[5rem] items-center justify-between gap-4">
          <Link className="group flex items-center gap-3" to="/">
            <div className="brand-mark">QM</div>
            <div className="leading-tight">
              <p className="font-family-display text-[1.34rem] font-semibold text-white">
                {site.shortName}
              </p>
              <p className="brand-kicker">Austin, Round Rock, Central Texas</p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                className={cn('topline-link', location.pathname === item.to && 'is-active')}
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
            className="grid size-10 place-content-center rounded-lg border border-carbon bg-night text-cloud transition-colors hover:text-white lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            type="button"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-t border-carbon bg-obsidian pb-6 pt-3 lg:hidden">
          <div className="layout-container space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.to}
                className={cn(
                  'block rounded-lg border border-transparent px-4 py-3 text-sm font-semibold text-cloud transition-colors hover:border-carbon hover:bg-night hover:text-white',
                  location.pathname === item.to && 'border-carbon bg-night text-white',
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
