import { ArrowRight, Phone } from 'lucide-react';
import { site } from '../data/site';
import { ButtonLink } from './Button';

export function PageBottomCta({
  heading = 'Need a written estimate?',
  text = 'Tell us where you are moving, what needs special handling, and the date you have in mind. We will reply with next steps and pricing details.',
  buttonText = 'Request an estimate',
  buttonTo = '/contact',
}) {
  return (
    <section className="section border-t border-slate-200 bg-[#faf8f5]" id="cta-block">
      <div className="site-container">
        <div className="grid gap-8 rounded-[1.75rem] border border-slate-200 bg-white p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm text-slate-600">Next step</p>
            <h2 className="mt-4 text-balance text-4xl leading-tight text-slate-900 sm:text-5xl">
              {heading}
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-700">
              {text}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink size="lg" to={buttonTo} variant="primary">
              <span>{buttonText}</span>
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-6 py-3.5 text-base font-medium text-slate-900 hover:border-slate-900"
              href={`tel:${site.phone.digits}`}
            >
              <Phone className="h-5 w-5" />
              <span>Call {site.phone.display}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
