import { site } from '../data/site';
import { ButtonLink } from './Button';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export function PageBottomCta({
  heading = 'Ready to lock in your next move date?',
  text = 'Tell us your dates and route, and we will confirm your options fast with a practical plan.',
  buttonText = 'Get My Free Quote',
  buttonTo = '/contact',
}) {
  return (
    <section className="section bg-white" id="cta-block">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-16 text-center text-white shadow-2xl shadow-slate-900/40 sm:px-16 sm:py-20 lg:py-24"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-32 w-[800px] h-[400px] bg-accent/30 blur-[130px] rounded-[100%] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.8125rem] font-bold uppercase tracking-widest text-slate-300 backdrop-blur-md mb-6">
              Reserve your move
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300">
              {text}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <ButtonLink
                className="bg-accent text-white border-accent hover:bg-accent-dark shadow-xl shadow-accent/20 rounded-xl px-8 py-4 flex items-center gap-3 transition-all hover:gap-4 data-[hover]:gap-4 font-semibold text-lg"
                size="lg"
                to={buttonTo}
                variant="primary"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </ButtonLink>
              <a
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10 backdrop-blur-md"
                href={`tel:${site.phone.digits}`}
              >
                <Phone className="w-5 h-5 text-slate-400" />
                <span>Call {site.phone.display}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
