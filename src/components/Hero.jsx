import { ButtonLink } from './Button';
import { heroStats, site } from '../data/site';

export function Hero() {
  return (
    <section className="section-gap">
      <div className="wrap">
        <div className="max-w-2xl space-y-5">
          <h1 className="heading-xl">
            Moving done right,
            <br />
            every single time.
          </h1>
          <p className="body-lg max-w-lg">
            We handle local and long-distance moves across Central Texas.
            You get a written quote, a clear plan, and a crew that shows up prepared.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink size="lg" to="/quote" variant="primary">
              Get a free quote
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.digits}`} size="lg" variant="secondary">
              Call {site.phone.display}
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div className="bg-bg p-5" key={stat.label}>
              <p className="font-display text-2xl text-text">{stat.value}</p>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
