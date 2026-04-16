import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { SEO } from '../components/SEO';
import { publicContact, site } from '../data/site';

const estimateChecklist = [
  'Pickup and delivery addresses',
  'Move date or date range',
  'Home size, stairs, elevators, or long carries',
  'Packing, storage, and specialty items',
];

const contactChecklist = [
  'Your service area or destination city',
  'Quote, schedule, packing, or storage question',
  'Best phone number or email for reply',
];

export function ContactPage({ variant = 'contact' } = {}) {
  const isQuote = variant === 'quote';
  const pageTitle = isQuote
    ? 'Request a Free Moving Estimate — Austin, TX'
    : 'Contact Quality Moving & Storage';
  const pageDescription = isQuote
    ? 'Request a written moving estimate from Quality Moving & Storage. Local, long-distance, packing, and storage quotes for Austin, Round Rock, Cedar Park, Pflugerville, and Lakeway.'
    : 'Contact Quality Moving & Storage. Ask about Austin-area moving, packing, and storage services — or request a written estimate.';

  return (
    <>
      <SEO
        canonical={isQuote ? '/quote' : '/contact'}
        title={pageTitle}
        description={pageDescription}
        keywords="contact Austin movers, moving estimate Austin, request moving quote, Austin moving company phone"
      />

      <section className="section-tight pt-16 md:pt-24">
        <div className="wrap">
          <p className="eyebrow">{isQuote ? 'Free estimate' : 'Contact'}</p>
          <h1 className="display-xl mt-5 max-w-4xl text-balance">
            {isQuote ? (
              <>Tell us about your move.{' '}<span className="serif-italic" style={{ color: 'var(--color-brand)' }}>We'll write you back.</span></>
            ) : (
              <>Questions, scheduling, or just <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>a gut check</span>.</>
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-graphite)]">
            {isQuote
              ? 'The more detail you send, the more accurate your estimate. Missing details can always be filled in after the walkthrough.'
              : 'Tell us the route, timeline, and anything unusual about access or handling — we\'ll point you to the right next step.'}
          </p>
        </div>
      </section>

      <section className="section pt-8">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="rounded-2xl border border-[var(--color-line)] surface-bone p-6 sm:p-7">
                <p className="text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-stone)]">Reach us directly</p>
                <div className="mt-5 grid gap-5">
                  {publicContact.hasPhone ? (
                    <a href={publicContact.phoneHref} className="group flex items-start gap-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-ink)]">
                        <Phone className="h-4 w-4" style={{ color: 'var(--color-brand)' }} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-[var(--color-stone)]">Phone</span>
                        <span className="font-display text-xl text-[var(--color-ink)] group-hover:text-[var(--color-brand)]">{site.phone.display}</span>
                      </span>
                    </a>
                  ) : null}

                  {publicContact.hasEmail ? (
                    <a href={publicContact.emailHref} className="group flex items-start gap-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-line-strong)]">
                        <Mail className="h-4 w-4" style={{ color: 'var(--color-brand)' }} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-[var(--color-stone)]">Email</span>
                        <span className="text-[0.9375rem] text-[var(--color-ink)] group-hover:text-[var(--color-brand)]">{site.email}</span>
                      </span>
                    </a>
                  ) : null}

                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-line-strong)]">
                      <Clock className="h-4 w-4" style={{ color: 'var(--color-brand)' }} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-[var(--color-stone)]">Hours</span>
                      <span className="text-[0.9375rem] text-[var(--color-ink)]">{site.hours.summary}</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-line-strong)]">
                      <MapPin className="h-4 w-4" style={{ color: 'var(--color-brand)' }} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-[var(--color-stone)]">Office</span>
                      {site.address ? (
                        <address className="not-italic text-[0.9375rem] text-[var(--color-ink)]">
                          {site.address.street}<br />
                          {site.address.city}, {site.address.region} {site.address.postalCode}
                        </address>
                      ) : (
                        <span className="text-[0.9375rem] text-[var(--color-ink)]">{site.officeLabel}. Austin, Round Rock, and Central Texas.</span>
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-stone)]">
                  {isQuote ? 'What to include' : 'Helpful details'}
                </p>
                <ul className="mt-4 grid gap-3 text-sm text-[var(--color-graphite)]">
                  {(isQuote ? estimateChecklist : contactChecklist).map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: 'var(--color-brand)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Form */}
            <div className="rounded-3xl border border-[var(--color-line)] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_-36px_rgba(26,20,16,0.35)]">
              <h2 className="font-display text-2xl leading-tight text-[var(--color-ink)] sm:text-3xl">
                {isQuote ? 'Estimate request' : 'Send us a message'}
              </h2>
              <p className="mt-2 text-sm text-[var(--color-stone)]">
                {isQuote
                  ? 'We reply within one business day with next steps and a walkthrough time.'
                  : 'We reply within one business day.'}
              </p>
              <div className="mt-7">
                <ContactForm variant={isQuote ? 'quote' : 'contact'} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
