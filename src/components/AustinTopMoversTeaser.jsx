import { Link } from 'react-router-dom';
import { austinTopMovers } from '../data/austinTopMovers';

export function AustinTopMoversTeaser() {
  const topThree = austinTopMovers.slice(0, 3);

  return (
    <section className="section border-t border-slate-200 bg-white">
      <div className="site-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="max-w-md">
          <h2 className="text-balance text-4xl text-slate-900">
            Need a shortlist before you ask for quotes?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700">
            We pulled together a public Austin shortlist, the ranking sources behind it, and the
            questions that matter when the quotes start coming in.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3">
            <Link
              className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
              to="/austin-top-movers"
            >
              Read the full Austin mover guide
            </Link>
            <Link
              className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
              to="/quote"
            >
              Request our estimate
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-200">
          {topThree.map((mover) => (
            <div className="grid gap-3 border-b border-slate-200 py-5 lg:grid-cols-[180px_1fr]" key={mover.name}>
              <p className="text-sm text-slate-600">{mover.snapshot}</p>
              <div>
                <h3 className="text-xl text-slate-900">{mover.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{mover.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
