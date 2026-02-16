import { ButtonLink } from './Button';
import { heroStats, services, site } from '../data/site';

const quickChecks = [
  'Guaranteed written quote before any booking.',
  'Protective prep for floors, stairs, and sharp corners.',
  'Single move captain from start to finish.',
];

export function Hero() {
  return (
    <section className="hero-shell section-space">
      <div className="layout-shell hero-grid">
        <div className="reveal space-y-6" data-delay="1">
          <p className="kicker">Round Rock based. Austin and Central Texas coverage.</p>
          <h1 className="headline-large">
            No moving day stress.
            <br />
            Just a clear, safe move plan.
          </h1>
          <p className="section-copy">
            We plan every move like an operations lead: exact timing, protected access,
            and direct communication from the first call to final placement.
          </p>

          <ul className="hero-checklist">
            {quickChecks.map((item) => (
              <li key={item}>
                <span className="hero-dot" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="hero-cta-row">
            <ButtonLink size="lg" to="/quote" variant="primary">
              Get your guaranteed quote
            </ButtonLink>
            <ButtonLink size="lg" to="/services" variant="secondary">
              See our service menu
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.digits}`} size="lg" variant="ghost">
              Call {site.phone.display}
            </ButtonLink>
          </div>
        </div>

        <aside className="hero-panel reveal" data-delay="2">
          <p className="eyebrow">Move command board</p>
          <h2 className="section-title">What we lock in for your move.</h2>

          <div className="hero-metrics">
            {heroStats.map((stat) => (
              <article className="hero-stat" key={stat.label}>
                <p className="value">{stat.value}</p>
                <p className="text-sm mt-1 text-fog">{stat.label}</p>
              </article>
            ))}
          </div>

          <figure className="hero-media">
            <img
              alt="Professional movers loading a home with care"
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
