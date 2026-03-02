import { motion } from 'framer-motion';
import { ButtonLink } from './Button';
import { site } from '../data/site';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 min-h-[90vh] flex flex-col justify-center pt-24 pb-16 lg:pt-32 lg:pb-32 lg:flex-row lg:items-center">
      <div className="site-container relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Content Area */}
        <div className="lg:col-span-6 flex flex-col items-start max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm mb-8 tracking-wide uppercase"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Austin &amp; Central Texas • Est. {site.yearFounded}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-balance text-5xl font-bold leading-[1.05] text-slate-900 md:text-6xl tracking-tight"
          >
            Your life is in these boxes. <br className="hidden md:block" />
            <span className="text-accent font-serif italic text-4xl md:text-5xl lg:text-6xl font-normal block mt-2">We treat them like it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600 sm:text-xl"
          >
            Reliable, quiet, and completely transparent moving, packing, and storage services. Serving Round Rock, Austin, and everywhere in between with the care your home deserves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-5"
          >
            <ButtonLink
              className="bg-accent text-white hover:bg-slate-900 transition-colors font-medium rounded-full px-8 py-3.5 flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
              size="lg"
              to="/contact"
            >
              <span>Get a firm quote</span>
              <ArrowRight className="w-4 h-4" />
            </ButtonLink>

            <a
              className="group flex items-center gap-3 px-2 py-3"
              href={`tel:${site.phone.digits}`}
            >
              <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-600 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                <span className="sr-only">Call us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-xs font-medium uppercase tracking-widest text-slate-500">Or talk to a human</span>
                <span className="text-base font-semibold tabular-nums text-slate-900 group-hover:text-accent transition-colors">
                  {site.phone.display}
                </span>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Right Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 relative mt-12 lg:mt-0"
        >
          <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-slate-200 shadow-xl border border-slate-200/50">
            <img
              alt="Careful movers packing a home"
              className="h-full w-full object-cover"
              decoding="async"
              src="/hero-bg.png"
            />
            {/* Subtle inner shadow/border overlay instead of dark muddy full-bleed overlay */}
            <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 rounded-2xl sm:rounded-[2.5rem]" />
          </div>

          {/* Bespoke detail floating element */}
          <div className="absolute -bottom-6 -left-6 sm:bottom-12 sm:-left-12 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[240px]">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">Locally Owned</p>
              <p className="text-xs text-slate-500 font-medium mt-1 leading-snug">Deep roots in the Round Rock community.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
