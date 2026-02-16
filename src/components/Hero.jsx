import { ButtonLink } from './Button';
import { site } from '../data/site';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900">
      {/* Background photo */}
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
        decoding="async"
        src="/hero-bg.png"
      />
      {/* Overlay — dark enough to read text, light enough to see the photo */}
      <div className="absolute inset-0 bg-slate-950/65" />

      <div className="relative site-container flex min-h-[520px] flex-col justify-end pb-14 pt-24 sm:min-h-[560px] sm:pb-16 lg:min-h-[600px] lg:pb-20">
        <p className="text-sm font-medium text-slate-300 sm:text-base">
          Austin &amp; Central Texas movers — {site.yearFounded} to today
        </p>

        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          We move your home like it's ours.
        </h1>

        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
          Local and long-distance moving, packing, and storage across Round Rock, Cedar Park, Pflugerville, Lakeway,
          and greater Austin.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <ButtonLink
            className="bg-accent border-accent text-white hover:bg-accent/85"
            size="lg"
            to="/contact"
            variant="primary"
          >
            Get a free quote
          </ButtonLink>
          <a
            className="text-sm font-medium text-white/90 underline underline-offset-4 decoration-white/40 hover:text-white hover:decoration-white/70"
            href={`tel:${site.phone.digits}`}
          >
            or call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
