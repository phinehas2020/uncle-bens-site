import { site } from '../data/site';
import { ButtonLink } from './Button';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export function PageBottomCta({
  heading = 'Let\'s get your dates locked in.',
  text = 'Reach out early to secure your preferred calendar slot. We\'ll reply fast with a clear, line-item scope of work.',
  buttonText = 'Get My Free Quote',
  buttonTo = '/contact',
}) {
  return (
    <section className="section bg-slate-50 border-t border-slate-200/60" id="cta-block">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-16 text-center text-white sm:px-16 sm:py-20 lg:py-24 border border-slate-800 shadow-xl shadow-slate-900/10"
        >
          {/* Elegant subtle grid/texture instead of a blurry orb */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative z-10 flex flex-col items-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[0.8125rem] font-bold uppercase tracking-widest text-slate-300 backdrop-blur-md mb-6 hover:bg-white/10 transition-colors">
              Next Steps
            </p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold font-serif leading-tight sm:text-5xl lg:text-5xl tracking-tight">
              {heading}
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-400">
              {text}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <ButtonLink
                className="bg-accent text-white border-accent hover:bg-white hover:text-slate-900 hover:border-white shadow-xl shadow-accent/20 rounded-full px-8 py-4 flex items-center justify-center gap-3 transition-all font-semibold text-base min-w-[220px]"
                size="lg"
                to={buttonTo}
                variant="primary"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </ButtonLink>
              <a
                className="inline-flex min-w-[220px] justify-center items-center gap-3 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-4 text-base font-semibold text-slate-200 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600 backdrop-blur-md"
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
