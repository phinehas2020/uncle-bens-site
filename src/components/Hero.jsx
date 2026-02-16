import { ButtonLink } from './Button';
import { heroStats, services, site } from '../data/site';

const quickChecks = [
  'Guaranteed written quotes before scheduling.',
  'Protective prep for floors, corners, and door frames.',
  'A dedicated move lead from first call to final placement.',
];

export function Hero() {
  return (
    <section className="hero-stage texture-lines section-space relative overflow-hidden pt-20">
      <div className="layout-container hero-grid">
        <div className="space-y-7">
          <p className="eyebrow animated-rise" data-delay="1">
            Round Rock Based. Austin & Central Texas Coverage.
          </p>

          <h1 className="display-title animated-rise" data-delay="2">
            No moving-day chaos.
            <span className="gold-gradient block">Just a crew with a real plan.</span>
          </h1>

          <p
            className="section-copy animated-rise max-w-2xl text-[clamp(1.02rem,0.96rem+0.35vw,1.28rem)]"
            data-delay="3"
          >
            We run moves like operations, not guesswork. Scope first, timeline second,
            then a clean execution plan that keeps your day predictable.
          </p>

          <ul className="hero-checklist animated-rise" data-delay="4">
            {quickChecks.map((item) => (
              <li key={item}>
                <span aria-hidden="true" className="hero-dot" />
                {item}
              </li>
            ))}
          </ul>

          <div className="animated-rise flex flex-wrap gap-3" data-delay="4">
            <ButtonLink size="lg" to="/quote" variant="primary">
              Get Your Guaranteed Quote
            </ButtonLink>
            <ButtonLink size="lg" to="/services" variant="secondary">
              Browse Service Options
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.digits}`} size="lg" variant="ghost">
              Call {site.phone.display}
            </ButtonLink>
          </div>
        </div>

        <aside className="hero-board animated-rise" data-delay="4">
          <p className="text-sm font-semibold text-cloud">Service Snapshot</p>

          <div className="hero-metrics mt-4">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <p className="font-family-display text-4xl leading-none text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-fog">{stat.label}</p>
              </div>
            ))}
          </div>

          <figure className="hero-media">
            <img
              alt="Professional movers preparing a residential move"
              height="900"
              loading="lazy"
              src={services[0].image}
              width="1200"
            />
            <figcaption className="hero-caption">
              Residential, commercial, packing, and storage support from one accountable team.
            </figcaption>
          </figure>
        </aside>
      </div>
    </section>
  );
}
