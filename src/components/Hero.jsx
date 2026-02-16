import { ButtonLink } from './Button';
import { heroStats, site } from '../data/site';

export function Hero() {
  const trustSignals = [
    'Licensed & insured crews',
    'Guaranteed written quotes',
    'Mon-Sat move support',
  ];

  return (
    <section className="hero-stage texture-lines section-space relative overflow-hidden pt-24">
      <div className="layout-container hero-grid">
        <div className="space-y-7">
          <p className="eyebrow animated-rise" data-delay="1">
            Round Rock Based • Austin & Central Texas
          </p>

          <h1 className="display-title animated-rise" data-delay="2">
            Move day should feel
            <span className="gold-gradient block">organized, calm, and on time.</span>
          </h1>

          <p
            className="section-copy animated-rise max-w-2xl text-[clamp(1.02rem,0.96rem+0.35vw,1.3rem)]"
            data-delay="3"
          >
            From apartment moves to full-office relocations, our crews show up prepared,
            protect every surface, and keep communication clear from first box to final setup.
          </p>

          <div className="chip-list animated-rise" data-delay="4">
            {trustSignals.map((signal) => (
              <span className="chip" key={signal}>
                {signal}
              </span>
            ))}
          </div>

          <div className="animated-rise flex flex-wrap gap-3 pt-1" data-delay="4">
            <ButtonLink size="lg" to="/quote" variant="primary">
              Get Your Guaranteed Quote
            </ButtonLink>
            <ButtonLink size="lg" to="/austin-top-movers" variant="secondary">
              Compare Top Austin Movers
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.digits}`} size="lg" variant="secondary">
              Call {site.phone.display}
            </ButtonLink>
          </div>

          <p className="hero-note animated-rise max-w-xl text-sm leading-relaxed text-cloud/88" data-delay="4">
            Need a fast answer? Most quote requests receive a response within one business day.
          </p>
        </div>

        <aside className="glass-panel stat-stack animated-rise relative p-6 sm:p-8" data-delay="4">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(176,143,80,0.17),transparent_45%),radial-gradient(circle_at_86%_72%,rgba(115,132,168,0.22),transparent_48%)]" />

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft/95">
            Why Clients Choose Quality
          </p>

          <div className="grid grid-cols-2 gap-3">
            {heroStats.map((stat) => (
              <div className="stat-block p-4 sm:p-5" key={stat.label}>
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
              Real Human Follow-Up
            </p>
            <p className="mt-2 leading-relaxed">
              Tell us your move details and we will map the fastest, safest next step for your timeline.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
