import { ButtonLink } from './Button';
import { austinTopMovers } from '../data/austinTopMovers';

export function AustinTopMoversTeaser() {
  const topThree = austinTopMovers.slice(0, 3);

  return (
    <section className="section">
      <div className="site-container">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm text-slate-600">Austin mover guide</p>
              <h2 className="mt-4 text-3xl text-slate-900">
                Researching Austin movers?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                We pulled together a public shortlist, pricing context, and quote checklist so you
                can compare movers with more confidence before you book.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink size="md" to="/austin-top-movers">
                  See the full shortlist
                </ButtonLink>
                <ButtonLink size="md" to="/quote" variant="secondary">
                  Request an estimate
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-3">
              {topThree.map((mover) => (
                <div className="rounded-2xl border border-slate-200 p-4" key={mover.name}>
                  <p className="text-sm text-slate-600">{mover.snapshot}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{mover.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{mover.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
