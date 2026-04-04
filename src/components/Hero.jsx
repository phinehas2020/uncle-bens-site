import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { HeroLeadForm } from './HeroLeadForm';
import { publicContact, site } from '../data/site';

const heroHighlights = [
  'Local household and apartment moves',
  'Commercial relocation, packing, and storage support',
  'Written estimates before scheduling',
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const revealTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };
  const MotionFigure = motion.figure;
  const MotionDiv = motion.div;

  return (
    <section className="overflow-hidden border-b border-slate-200 bg-white">
      <div className="site-container py-6 sm:py-8 lg:py-10">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-12">
          <MotionFigure
            animate={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
            className="order-1 -mx-5 sm:-mx-8 lg:order-2 lg:-mr-10 lg:ml-0"
            initial={reduceMotion ? false : { opacity: 0, x: 28, scale: 0.98 }}
            transition={revealTransition}
          >
            <img
              alt="Moving crew loading furniture into a truck"
              className="aspect-[16/11] w-full object-cover object-[center_32%] sm:aspect-[6/4] sm:object-center lg:aspect-[10/11] lg:max-h-[42rem]"
              decoding="async"
              fetchPriority="high"
              src="/hero-bg.png"
            />
            <figcaption className="mt-3 px-5 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:px-8 lg:px-0 lg:pr-10">
              Crew on a local job. Estimates start with a walkthrough so access, timing, and
              inventory match move day.
            </figcaption>
          </MotionFigure>

          <MotionDiv
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="order-2 max-w-xl lg:order-1"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            transition={revealTransition}
          >
            <p className="text-sm font-semibold tracking-[0.01em] text-slate-900">{site.displayName}</p>
            <h1 className="mt-3 text-pretty text-4xl text-slate-900 sm:text-5xl lg:max-w-[11ch] lg:text-[3.75rem] lg:leading-[1.02]">
              Austin and Round Rock movers for homes, offices, packing, and storage.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-700 sm:text-lg">
              Local moves, commercial relocations, packing, storage gaps, and long-distance routes
              all start with a written estimate and a clear plan for access, timing, and handling.
            </p>

            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm leading-relaxed text-slate-600">
              <span>{site.officeLabel}</span>
              <span className="text-slate-300">/</span>
              <span>Austin + Central Texas routes</span>
              <span className="text-slate-300">/</span>
              <span>{site.hours.summary}</span>
            </p>

            <HeroLeadForm />

            <div className="mt-6 grid gap-3 border-t border-slate-200 pt-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <p className="text-sm leading-relaxed text-slate-700" key={item}>
                  {item}
                </p>
              ))}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              {publicContact.hasPhone ? 'Prefer the phone? ' : 'Prefer to talk it through? '}
              {publicContact.hasPhone ? (
                <a
                  className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                  href={publicContact.phoneHref}
                >
                  Call {site.phone.display}
                </a>
              ) : (
                <Link
                  className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                  to="/contact"
                >
                  talk through your move
                </Link>
              )}
              {' or '}
              <Link
                className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                to="/quote"
              >
                use the full quote form
              </Link>
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
