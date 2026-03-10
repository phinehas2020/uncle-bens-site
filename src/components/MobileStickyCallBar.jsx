import { site } from '../data/site';

export function MobileStickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
      <div className="mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-1">
        <a
          className="flex items-center justify-center rounded-[1rem] bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          href={`tel:${site.phone.digits}`}
        >
          Call {site.phone.display}
        </a>
      </div>
    </div>
  );
}
