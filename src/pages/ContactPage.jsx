import { ContactForm } from '../components/ContactForm';
import { SEO } from '../components/SEO';
import { publicContact, site } from '../data/site';

const estimateChecklist = [
  'Pickup and delivery addresses',
  'Move date or date range',
  'Home size, stairs, elevators, or long carries',
  'Packing, storage, and specialty-item needs',
];

const contactChecklist = [
  'Your service area or destination city',
  'Whether you need a quote, a schedule answer, or help with packing or storage',
  'The best phone number or email for a reply',
];

export function ContactPage({ variant = 'contact' } = {}) {
  const contactInfo = [
    ...(publicContact.hasPhone
      ? [{ label: 'Phone', value: site.phone.display, href: publicContact.phoneHref }]
      : [{ label: 'Call path', value: 'Use the form below and we can route you to the right next step.' }]),
    ...(publicContact.hasEmail
      ? [{ label: 'Email', value: site.email, href: publicContact.emailHref }]
      : []),
    { label: 'Hours', value: site.hours.summary },
    site.address
      ? {
          label: 'Office',
          value: `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
        }
      : { label: 'Office', value: `${site.officeLabel} serving Austin and nearby Central Texas cities.` },
  ];

  const isQuote = variant === 'quote';
  const pageTitle = isQuote ? 'Request an Estimate' : 'Contact Us';
  const pageDescription = isQuote
    ? 'Request a written estimate for local moving, long-distance moving, packing, or storage in Austin, Round Rock, Cedar Park, Pflugerville, and Lakeway.'
    : 'Contact our Austin-area moving team about local moving, long-distance moving, packing, and storage services.';

  return (
    <>
      <SEO
        canonical={isQuote ? '/quote' : '/contact'}
        title={pageTitle}
        description={pageDescription}
        keywords="contact, moving company, packing services, storage solutions"
      />

      <section className="section">
        <div className="site-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="max-w-md">
            <h1 className="text-balance text-4xl text-slate-900 sm:text-5xl">
              {isQuote ? 'Request a written estimate.' : 'Send the basics or talk it through.'}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-700">
              {isQuote
                ? 'The more detail you send up front, the easier it is to quote the move accurately.'
                : 'Tell us the route, the timeline, and anything unusual about access or handling, and we will point you to the right next step.'}
            </p>

            <div className="mt-8 border-t border-slate-200">
              {contactInfo.map((item) => (
                <div className="grid gap-2 border-b border-slate-200 py-4 sm:grid-cols-[90px_1fr]" key={item.label}>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  {item.href ? (
                    <a className="text-sm leading-relaxed text-slate-700 hover:text-accent" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm leading-relaxed text-slate-700">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-900">
                {isQuote ? 'Helpful details to include' : 'Helpful details for a fast reply'}
              </p>
              <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-700">
                {(isQuote ? estimateChecklist : contactChecklist).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 lg:pt-0 lg:pl-8">
            <h2 className="text-2xl text-slate-900">
              {isQuote ? 'Tell us about the move' : 'Tell us what you need help with'}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
              If you are still sorting out the plan, send what you know. Missing details can be
              filled in after the first conversation.
            </p>
            <div className="mt-6">
              <ContactForm variant={isQuote ? 'quote' : 'contact'} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
