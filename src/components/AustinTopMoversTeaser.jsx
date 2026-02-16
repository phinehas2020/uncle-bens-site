import { ButtonLink } from './Button';
import { austinTopMovers } from '../data/site';

export function AustinTopMoversTeaser() {
  const topThree = austinTopMovers.slice(0, 3);

  return (
    <section className="section-space-sm">
      <div className="layout-shell space-y-7">
        <div className="max-w-3xl space-y-3">
          <p className="kicker">Mover signal board</p>
          <h2 className="section-title">Austin movers reduced to clear decisions.</h2>
          <p className="section-copy">
            We keep top movers to a practical shortlist by pairing rankings with
            what matters on move day: reliability, responsiveness, and care.
          </p>
        </div>

        <div className="top-movers-grid">
          {topThree.map((mover) => (
            <article className="rank-card" key={mover.name}>
              <p className="label-copy">Rank #{mover.rank}</p>
              <h3 className="text-3xl text-pearl font-family-display">{mover.name}</h3>
              <p className="text-sm uppercase tracking-[0.12em] text-fog">
                Score {mover.score} / BBB {mover.bbb}
              </p>
              <p className="text-sm text-cloud">{mover.note}</p>
              <p className="text-xs text-fog">Avg move window: {mover.avgMoveDuration}</p>
            </article>
          ))}
        </div>

        <div className="hero-cta-row">
          <ButtonLink size="lg" to="/austin-top-movers" variant="primary">
            Open full ranking analysis
          </ButtonLink>
          <ButtonLink size="lg" to="/quote" variant="secondary">
            Need a local quote
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
