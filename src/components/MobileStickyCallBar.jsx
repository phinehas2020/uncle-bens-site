import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { publicContact } from '../data/site';

/** Thumb-zone CTAs on small screens; phone stays in header so this complements rather than competes with hero form */
export function MobileStickyCallBar() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        {publicContact.hasPhone ? (
          <a
            className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white text-sm font-semibold text-slate-900"
            href={publicContact.phoneHref}
          >
            <Phone aria-hidden className="size-4 shrink-0 text-accent" />
            Call now
          </a>
        ) : (
          <Link
            className="flex min-h-12 min-w-0 flex-1 items-center justify-center rounded-md border border-slate-300 bg-white text-sm font-semibold text-slate-900"
            to="/contact"
          >
            Contact us
          </Link>
        )}
        <Link
          className="flex min-h-12 min-w-0 flex-1 items-center justify-center rounded-md border border-accent bg-accent px-2 text-center text-sm font-semibold text-white"
          to="/quote"
        >
          Written quote
        </Link>
      </div>
    </div>
  );
}
