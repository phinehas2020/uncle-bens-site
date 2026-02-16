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
    <header className="header-bar">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-header focus:rounded-md focus:bg-bg focus:px-3 focus:py-2 focus:text-text"
        href="#main-content"
      >
        Skip to main content
      </a>

      <div className="wrap header-inner">
        <Link className="flex items-center gap-2 text-decoration-none" onClick={() => setMobileOpen(false)} to="/">
          <span className="text-base font-semibold text-text">{site.name}</span>
        </Link>

        <nav>
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  className={cn('nav-link', location.pathname === item.to && 'is-active')}
                  onFocus={() => preloadRoute(item.to)}
                  onMouseEnter={() => preloadRoute(item.to)}
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
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
            Get a Quote
          </ButtonLink>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="menu-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          type="button"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      <div className={cn('mobile-drawer', mobileOpen && 'is-open')}>
        <div className="wrap flex flex-col gap-1 pb-3">
          {navigation.map((item) => (
            <Link
              className={cn('mobile-link', location.pathname === item.to && 'is-active')}
              key={item.to}
              onFocus={() => preloadRoute(item.to)}
              onMouseEnter={() => preloadRoute(item.to)}
              onClick={() => setMobileOpen(false)}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-wrap gap-2 pt-2">
            <ButtonLink
              href={`tel:${site.phone.digits}`}
              onClick={() => setMobileOpen(false)}
              size="sm"
              variant="ghost"
            >
              Call Us
            </ButtonLink>
            <ButtonLink
              onFocus={() => preloadRoute('/quote')}
              onClick={() => setMobileOpen(false)}
              size="sm"
              to="/quote"
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
