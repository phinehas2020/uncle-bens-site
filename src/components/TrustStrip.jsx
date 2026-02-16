import { heroStats } from '../data/site';

export function TrustStrip() {
    return (
        <div className="border-b border-slate-200 bg-white">
            <div className="site-container">
                <dl className="grid grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
                    {heroStats.map((stat) => (
                        <div className="px-4 py-5 text-center sm:py-6" key={stat.label}>
                            <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                {stat.label}
                            </dt>
                            <dd className="mt-1 text-2xl font-bold tabular-nums text-slate-900 sm:text-3xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
