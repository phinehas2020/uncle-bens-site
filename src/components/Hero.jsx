import { ButtonLink } from './Button';
import { heroStats, site } from '../data/site';

export function Hero() {
  return (
    <section className="section-gap overflow-hidden">
      <div className="wrap">
        <div className="split items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-light px-3 py-1 text-[10px] font-bold tracking-[0.08em] text-accent uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              Reliable Central Texas Movers
            </div>

            <h1 className="heading-xl">
              Moving done right,
              <br />
              <span className="text-accent italic">every single</span> time.
            </h1>

            <p className="body-lg max-w-lg">
              We handle local and long-distance moves across Central Texas.
              You get a written quote, a clear plan, and a crew that shows up prepared.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <ButtonLink size="lg" to="/quote" variant="primary">
                Get a free quote
              </ButtonLink>
              <ButtonLink href={`tel:${site.phone.digits}`} size="lg" variant="secondary">
                Call {site.phone.display}
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl lg:aspect-square xl:aspect-[4/3]">
              <img
                src="/hero-image.png"
                alt="Professional moving truck in a Central Texas neighborhood"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -right-8 -bottom-8 -z-10 hidden h-64 w-64 rounded-2xl bg-teal/5 lg:block"></div>
            <div className="absolute -left-12 -top-12 -z-10 hidden h-32 w-32 rounded-full bg-accent/5 lg:block"></div>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div className="bg-bg p-6 text-center" key={stat.label}>
              <p className="font-display text-3xl text-text">{stat.value}</p>
              <p className="mt-1 text-[11px] font-bold text-text-muted uppercase tracking-[0.15em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

