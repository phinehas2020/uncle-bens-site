import { ArrowRight } from 'lucide-react';
import { ButtonLink } from './Button';
import { site, yearsInBusiness } from '../data/site';

export function Hero() {
  return (
    <section className="border-b border-slate-200">
      <div className="site-container grid gap-6 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col justify-center py-6 sm:py-10 lg:py-16 lg:pr-12">
          <h1 className="text-balance text-[2.75rem] leading-[1.05] text-slate-900 sm:text-5xl lg:text-[3.5rem]">
            Austin &amp; Round Rock Moving Company
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-700">
            Written estimates, protected floors, and a crew that shows up ready. Local moves,
            packing, storage, and long-distance.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink size="lg" to="/contact" variant="primary">
              <span>Get a written estimate</span>
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.digits}`} size="lg" variant="secondary">
              Call {site.phone.display}
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200 pt-6 text-sm text-slate-600">
            <span className="font-medium text-slate-900">&#9733; 4.9 rating</span>
            <span>{yearsInBusiness}+ years in business</span>
            <span>TXDMV licensed</span>
            <span>Round Rock, TX</span>
          </div>
        </div>

        <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:self-stretch">
          <img
            alt="Quality Moving crew loading furniture into a truck"
            className="h-full w-full object-cover"
            decoding="async"
            src="/hero-bg.png"
          />
        </div>
      </div>
    </section>
  );
}
