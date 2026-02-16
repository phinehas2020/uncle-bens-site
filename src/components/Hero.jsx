import { Link } from 'react-router-dom';
import { ButtonLink } from './Button';
import { heroStats, site } from '../data/site';

export function Hero() {
  return (
    <section className="section overflow-hidden">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <p className="subtle-badge">Austin moving company since 2006</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Local and long-distance moves handled with care.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We provide moving, packing, and storage solutions across Austin and
              Central Texas with guaranteed quotes, trained crews, and transparent planning.
            </p>

            <div className="flex flex-wrap gap-3">
              <ButtonLink size="lg" to="/contact" variant="primary">
                Get a quote
              </ButtonLink>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                to="/services"
              >
                Explore services
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 text-sm text-slate-600 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <p key={stat.label} className="leading-tight">
                  <span className="block text-sm font-semibold text-slate-900">{stat.value}</span>
                  <span>{stat.label}</span>
                </p>
              ))}
            </div>
          </div>

          <div>
            <img
              alt="Quality Moving & Storage team preparing a move in Central Texas"
              className="h-auto w-full rounded-2xl border border-slate-200 object-cover"
              src="/hero-image.png"
            />
            <p className="mt-2 text-sm text-slate-500">
              Moving coordinator notes, clear communication, and careful placement are part of our
              standard workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
