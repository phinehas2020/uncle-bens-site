import { ButtonLink } from './Button';
import { austinTopMovers } from '../data/site';

export function AustinTopMoversTeaser() {
  const topThree = austinTopMovers.slice(0, 3);

  return (
    <section className="section-gap-sm">
      <div className="wrap">
        <div className="split items-center">
          <div className="space-y-3">
            <h2 className="heading-lg">Top-rated Austin movers</h2>
            <p className="body-lg">
              We track rankings so you can compare before committing.
              Here are the top 3 from recent data.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <ButtonLink size="md" to="/austin-top-movers" variant="primary">
                See full rankings
              </ButtonLink>
              <ButtonLink size="md" to="/quote" variant="secondary">
                Get a quote
              </ButtonLink>
            </div>
          </div>

          <div className="space-y-3">
            {topThree.map((mover) => (
              <div className="card p-4" key={mover.name}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-base font-semibold text-text">
                    #{mover.rank} {mover.name}
                  </h3>
                  <span className="text-sm tabular-nums text-text-muted">{mover.score}/10</span>
                </div>
                <p className="mt-1 text-sm text-text-secondary">{mover.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
