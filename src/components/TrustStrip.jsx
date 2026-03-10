import { heroStats } from '../data/site';

export function TrustStrip() {
  return (
    <div className="border-y border-slate-200 bg-[#faf8f5]">
      <div className="site-container">
        <dl className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div className="bg-white px-5 py-6" key={stat.label}>
              <dt className="text-sm font-medium text-slate-600">{stat.label}</dt>
              <dd className="mt-2 text-3xl tabular-nums text-slate-900 sm:text-[2rem]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
