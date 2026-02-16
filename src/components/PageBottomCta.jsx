import { site } from '../data/site';
import { ButtonLink } from './Button';

export function PageBottomCta({
  heading = 'Ready to lock in your next move date?',
  text = 'Tell us your dates and route, and we will confirm your options fast with a practical plan.',
  buttonText = 'Get My Free Quote',
  buttonTo = '/contact',
}) {
  return (
    <section className="section-surface" id="cta-block">
      <div className="site-container">
        <div className="rounded-2xl border border-slate-200 bg-slate-900 px-6 py-8 text-white shadow-sm shadow-black/20 sm:px-10 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Reserve your move</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight">{heading}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200">{text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink
              className="bg-accent text-white border-accent hover:opacity-90"
              size="lg"
              to={buttonTo}
              variant="primary"
            >
              {buttonText}
            </ButtonLink>
            <a
              className="inline-flex items-center justify-center rounded-lg border border-slate-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              href={`tel:${site.phone.digits}`}
            >
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
