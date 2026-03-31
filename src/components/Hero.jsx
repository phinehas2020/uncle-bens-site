import { Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site, yearsInBusiness } from '../data/site';

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-73px)] items-center border-b border-slate-900 bg-slate-950">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Quality Moving crew loading furniture into a truck"
          className="h-full w-full object-cover object-center opacity-30 mix-blend-luminosity lg:object-right"
          decoding="async"
          fetchpriority="high"
          src="/hero-bg.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="site-container relative z-10 flex h-full w-full flex-col justify-center py-12 sm:min-h-[500px] sm:py-20 lg:py-24 lg:min-h-[600px]">
        {/* Top/Middle Content */}
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl sm:text-5xl md:text-[4rem] font-medium leading-[1.05] tracking-tight text-white lg:text-[5rem]">
            Stress-free moving.<br />
            Trusted by Texans.
          </h1>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3 text-sm sm:text-base font-semibold text-slate-950 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Get a quote today
            </Link>
            <a
              href={`tel:${site.phone.digits}`}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-transparent px-7 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <Phone className="h-4 w-4" />
              <span>Call {site.phone.display}</span>
            </a>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-12 sm:mt-16 w-full">
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-400">
            Delivering dependable moving services that protect your belongings, 
            enhance your peace of mind, and drive a stress-free experience 
            across every mile of your journey.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-4 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <Star className="h-4 w-4 fill-blue-500 text-blue-500" />
              4.9 rating
            </span>
            <span>{yearsInBusiness}+ years in business</span>
            <span>TXDMV licensed</span>
            <span>Round Rock, TX</span>
            <span>Estimates in 24 hrs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
