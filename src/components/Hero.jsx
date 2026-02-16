import { Link } from 'react-router-dom';
import { ButtonLink } from './Button';
import { site, trustSignals } from '../data/site';

export function Hero() {
  return (
    <section className="section section-tight overflow-hidden">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="subtle-badge bg-slate-100 text-slate-700">Austin TX Movers — since {site.yearFounded}</p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Austin Movers Who Show Up On Time — Every Time.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From Round Rock and Cedar Park to Pflugerville, Lakeway, and Austin neighborhoods, we handle moving, packing,
              and storage with clear scope documents, disciplined communication, and dependable execution.
            </p>

            <div className="flex flex-wrap gap-3">
              <ButtonLink size="lg" to="/contact" variant="primary">
                Get My Free Quote
              </ButtonLink>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                to="/services"
              >
                Explore services
              </Link>
            </div>

            <a
              className="inline-flex w-full max-w-sm items-center justify-center rounded-lg border border-slate-900 bg-slate-900 px-4 py-3 text-base font-bold text-white shadow-sm sm:w-auto"
              href={`tel:${site.phone.digits}`}
            >
              Call {site.phone.display} to lock in your move date
            </a>

            <div className="grid gap-2 pt-1 sm:grid-cols-2">
              {trustSignals.map((signal) => (
                <p
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900"
                  key={signal.label}
                >
                  <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                    ✓
                  </span>
                  {signal.label}
                  <span className="block text-xs font-normal text-slate-600">{signal.detail}</span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <img
              alt="Quality Moving & Storage team preparing a move in Austin and Round Rock"
              className="h-auto w-full rounded-2xl border border-slate-200 object-cover"
              src="/hero-image.png"
            />
            <p className="mt-2 text-sm text-slate-500">
              We use local walk-through notes, room-level staging maps, and direct arrival windows so your move runs with fewer surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
