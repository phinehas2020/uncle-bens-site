import { ButtonLink } from './Button';
import { austinTopMovers } from '../data/site';

export function AustinTopMoversTeaser() {
  const topThree = austinTopMovers.slice(0, 3);

  return (
    <section className="section-space-sm">
      <div className="layout-container space-y-7">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Austin Movers Research</p>
          <h2 className="section-title">
            Where Austin
            <span className="gold-gradient"> moves get ranked.</span>
          </h2>
          <p className="section-copy">
            We reviewed the latest ranking snapshots for Austin-area movers and found a clear pattern:
            speed, clear communication, and consistent pricing behavior matter more than ad-heavy branding.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {topThree.map((mover) => (
            <article className="surface-card grid gap-3 p-6" key={mover.name}>
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-gold-soft">
                Rank #{mover.rank}
              </p>
              <h3 className="font-family-display text-3xl text-white">{mover.name}</h3>
              <p className="text-sm uppercase tracking-[0.12em] text-fog/80">
                Score {mover.score} • BBB {mover.bbb}
              </p>
              <p className="text-sm leading-relaxed text-cloud/90">{mover.note}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-fog">
                Avg move window: {mover.avgMoveDuration}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <ButtonLink size="lg" to="/austin-top-movers" variant="secondary">
            Read the Full Austin Movers Comparison
          </ButtonLink>
          <ButtonLink size="lg" to="/quote" variant="primary">
            Get a Local Austin Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
