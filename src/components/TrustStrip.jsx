import { motion } from 'framer-motion';
import { heroStats } from '../data/site';

export function TrustStrip() {
    return (
        <div className="border-b border-t border-slate-200 bg-white relative z-20 -mt-[1px]">
            <div className="site-container">
                <dl className="grid grid-cols-2 lg:grid-cols-4">
                    {heroStats.map((stat, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="px-4 py-8 text-center sm:py-10 border-r border-b lg:border-b-0 border-slate-100 last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
                            key={stat.label}
                        >
                            <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                                {stat.label}
                            </dt>
                            <dd className="text-3xl font-bold tabular-nums text-slate-900 sm:text-4xl tracking-tight">
                                {stat.value}
                            </dd>
                        </motion.div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
