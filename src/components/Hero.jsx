import { motion } from 'framer-motion';
import { ButtonLink } from './Button';
import { site } from '../data/site';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 min-h-[85vh] flex flex-col justify-center">
      {/* Background with a realistic, non-slop overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Movers doing careful work"
          aria-hidden="true"
          className="h-full w-full object-cover scale-105 opacity-60 mix-blend-luminosity"
          decoding="async"
          src="/hero-bg.png"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      <div className="relative z-10 site-container py-24 sm:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-300 backdrop-blur-md mb-8 tracking-wider uppercase"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Austin &amp; Central Texas • Est. {site.yearFounded}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-balance text-5xl font-semibold leading-[1.1] text-white md:text-6xl tracking-tight"
          >
            We move your home <br className="hidden md:block" />
            <span className="text-accent">like it's ours.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            Local and long-distance moving, packing, and secure storage across Round Rock, Cedar Park, Pflugerville, Lakeway, and greater Austin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6"
          >
            <ButtonLink
              className="bg-accent text-white hover:bg-accent-dark transition-colors font-semibold rounded-lg px-8 py-3.5 flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
              size="lg"
              to="/contact"
            >
              <span>Get a free quote</span>
              <ArrowRight className="w-4 h-4" />
            </ButtonLink>

            <a
              className="group flex flex-col items-start gap-1"
              href={`tel:${site.phone.digits}`}
            >
              <span className="text-xs font-medium uppercase tracking-widest text-slate-400">Prefer to call?</span>
              <span className="text-lg font-semibold tabular-nums text-white group-hover:text-accent transition-colors">
                {site.phone.display}
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 flex items-center gap-4 text-sm font-medium text-slate-400"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Locally Owned in Round Rock</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
