import { site } from '../data/site';

export function MobileStickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
      <div className="mx-auto max-w-sm rounded-full border border-slate-800 bg-slate-950/95 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.35)] backdrop-blur">
        <a
          className="flex items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          href={`tel:${site.phone.digits}`}
        >
          Call {site.phone.display}
        </a>
      </div>
    </div>
  );
}
