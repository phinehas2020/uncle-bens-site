import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { publicContact } from '../data/site';

export function MobileStickyCallBar() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/admin')) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-cream)_95%,transparent)] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
    >
      <div className="mx-auto flex max-w-lg items-stretch gap-2">
        {publicContact.hasPhone ? (
          <a
            className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-white text-sm font-medium text-[var(--color-ink)]"
            href={publicContact.phoneHref}
          >
            <Phone aria-hidden className="h-4 w-4" style={{ color: 'var(--color-brand)' }} />
            Call now
          </a>
        ) : (
          <Link
            className="flex min-h-12 min-w-0 flex-1 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white text-sm font-medium text-[var(--color-ink)]"
            to="/contact"
          >
            Contact us
          </Link>
        )}
        <Link
          className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-[var(--color-ink)] px-3 text-sm font-medium text-[var(--color-cream)]"
          to="/quote"
        >
          Free estimate
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
