import { ButtonLink } from './Button';
import { heroStats, site } from '../data/site';

export function Hero() {
  return (
    <section className="texture-lines section-space relative overflow-hidden pt-20">
      <div className="layout-container hero-grid">
        <div className="space-y-7">
          <p className="eyebrow animated-rise" data-delay="1">
            Austin • Round Rock • Central Texas
          </p>

          <h1 className="display-title animated-rise" data-delay="2">
            Not just moved.
            <span className="gold-gradient block">Elevated.</span>
          </h1>

          <p
            className="section-copy animated-rise max-w-2xl text-[clamp(1.02rem,0.96rem+0.35vw,1.3rem)]"
            data-delay="3"
          >
            We design calm, precise relocation experiences for families and teams
            who care about details, timing, and trust.
          </p>

          <div className="animated-rise flex flex-wrap gap-3" data-delay="4">
            <ButtonLink size="lg" to="/quote" variant="primary">
              Build My Move Plan
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.digits}`} size="lg" variant="secondary">
              Call {site.phone.display}
            </ButtonLink>
          </div>
        </div>

        <div className="glass-panel animated-rise relative overflow-hidden p-6 sm:p-8" data-delay="4">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(216,178,106,0.2),transparent_45%),radial-gradient(circle_at_86%_72%,rgba(106,140,255,0.3),transparent_48%)]" />

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold/95">
            Signature Performance
          </p>

          <div className="grid grid-cols-2 gap-3">
            {heroStats.map((stat) => (
              <div className="surface-card p-4 sm:p-5" key={stat.label}>
                <p className="font-family-display text-4xl leading-none text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-cloud/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-gold/25 bg-night/75 p-4 text-sm text-cloud/92">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold-soft">
              Concierge Quote Promise
            </p>
            <p className="mt-2 leading-relaxed">
              Get a guaranteed quote with timeline mapping and personalized service
              recommendations within one business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
