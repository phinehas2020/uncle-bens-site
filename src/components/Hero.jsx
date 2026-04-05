import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { HeroLeadForm } from './HeroLeadForm';
import { publicContact, site, heroStats } from '../data/site';

export function Hero() {
  const reduceMotion = useReducedMotion();
  const revealTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };
  const MotionDiv = motion.div;

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Hero image — full bleed on mobile, right column on desktop */}
      <div className="absolute inset-0 lg:left-[52%]">
        <img
          alt="Moving crew loading furniture into a truck"
          className="h-full w-full object-cover object-[center_32%]"
          decoding="async"
          fetchPriority="high"
          src="/hero-bg.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 lg:from-white lg:via-white/80 lg:to-transparent" />
      </div>

      <div className="site-container relative">
        <div className="grid lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Left: headline + trust + form */}
          <MotionDiv
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            className="max-w-xl py-6 sm:py-8 lg:py-10"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            transition={revealTransition}
          >
            <h1 className=" text-pretty text-4xl text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Movers who plan<br className="hidden sm:block" /> before they lift.
            </h1>

            <p className="mt-3 max-w-md text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed">
              Written estimates, one crew from walkthrough to placement, and a clear
              plan for access, timing, and handling — every job.
            </p>

            {/* Trust stats bar */}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-y border-slate-200 py-3">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-sm font-semibold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Lead form card */}
            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <p className="text-base font-semibold text-slate-900">Get your free estimate</p>
              <p className="mt-1 text-sm text-slate-600">
                Share a few details and we'll follow up to schedule a walkthrough.
              </p>
              <HeroLeadForm />
            </div>

            {/* Secondary CTA */}
            <p className="mt-3 text-sm text-slate-600">
              {publicContact.hasPhone ? 'Prefer to talk? ' : 'Prefer to talk it through? '}
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
                  Talk through your move
                </Link>
              )}
            </p>
          </MotionDiv>

          {/* Right column: spacer for the background image */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
