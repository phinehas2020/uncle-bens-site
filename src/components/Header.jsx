import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { navigation, site } from '../data/site';
import { ButtonLink } from './Button';

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
          ? 'border-cobalt/30 bg-obsidian/72 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
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
            <div className="grid size-9 place-content-center rounded-full border border-gold/50 bg-night text-xs font-bold text-gold transition-colors group-hover:text-gold-soft">
              Q
            </div>
            <div className="leading-none">
              <p className="font-family-display text-[1.12rem] font-semibold tracking-[0.08em] text-white">
                QUALITY
              </p>
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-cloud/90">
                Moving & Storage
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                className={cn(
                  'text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-cloud transition-colors hover:text-gold-soft',
                  location.pathname === item.to && 'text-gold',
                )}
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
            <ButtonLink size="sm" to="/quote" variant="primary">
              Start My Move
            </ButtonLink>
          </div>

          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-content-center rounded-full border border-cobalt/35 bg-night/80 text-cloud transition-colors hover:text-white lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            type="button"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-t border-cobalt/25 bg-obsidian/95 pb-6 pt-3 backdrop-blur-xl lg:hidden">
          <div className="layout-container space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.to}
                className={cn(
                  'block rounded-xl border border-transparent px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-cloud transition-colors hover:border-cobalt/30 hover:text-white',
                  location.pathname === item.to && 'border-cobalt/35 bg-night/70 text-white',
                )}
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
