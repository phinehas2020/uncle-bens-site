import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { companyValues, site } from '../data/site';

const companyFacts = [
  {
    label: 'Office',
    value: site.address
      ? `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`
      : `${site.officeLabel} serving Austin and nearby Central Texas cities.`,
  },
  { label: 'Coverage', value: 'Austin metro and nearby Central Texas cities' },
  { label: 'Estimate path', value: 'Talk through your move or request a quote to start a written scope review.' },
];

const processNotes = [
  {
    title: 'Tell us the route and the hard parts',
    text: 'Addresses, timing, stairs, elevators, heavy items, and storage gaps are the details that make the quote useful.',
  },
  {
    title: 'We turn that into a written plan',
    text: 'The estimate stage is where services get combined, access is flagged, and the next step is made clear before scheduling.',
  },
  {
    title: 'Move day follows the same scope',
    text: 'Packing help, truck timing, storage holds, and final placement should all trace back to the same written plan.',
  },
];

export function AboutPage() {
  const introIdentity = site.hasApprovedBusinessName
    ? `${site.name} is set up`
    : 'This Austin-area moving team is set up';

  return (
    <>
      <SEO
        canonical="/about"
        title="About"
        description="Learn how this Austin-area moving team handles written estimates, packing, storage, and move-day coordination across Central Texas."
        keywords="Austin moving company, packing services, storage solutions, Central Texas movers"
      />

      <section className="section">
        <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-md">
            <h1 className="text-balance text-4xl text-slate-900 sm:text-5xl">
              An Austin moving company built around prepared crews and clear handoffs.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-700">
              {introIdentity} for people who want the route, timing, and handling explained before
              the truck shows up. The site focuses on the practical details first: where the move
              starts, where it ends, what services are attached, and how to reach the office.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              That means local household moves, office relocations, packing help, storage gaps, and
              longer routes can be discussed as one job instead of separate bookings.
            </p>
          </div>

          <div className="border-t border-slate-200">
            {companyFacts.map((fact) => (
              <div className="grid gap-3 border-b border-slate-200 py-5 sm:grid-cols-[180px_1fr]" key={fact.label}>
                <p className="text-sm font-semibold text-slate-900">{fact.label}</p>
                <p className="text-sm leading-relaxed text-slate-700">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="site-container">
          <h2 className="text-balance text-3xl text-slate-900">How we work</h2>
          <div className="mt-8 border-t border-slate-300">
            {companyValues.map((value) => (
              <div className="grid gap-3 border-b border-slate-300 py-5 lg:grid-cols-[220px_1fr]" key={value.title}>
                <h3 className="text-2xl text-slate-900">{value.title}</h3>
                <p className="text-base leading-relaxed text-slate-700">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-slate-200 bg-white">
        <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-balance text-4xl text-slate-900">What happens after you reach out.</h2>
          </div>

          <div className="border-t border-slate-200">
            {processNotes.map((item) => (
              <div className="grid gap-3 border-b border-slate-200 py-5 sm:grid-cols-[180px_1fr]" key={item.title}>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm leading-relaxed text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="site-container mt-10 border-t border-slate-200 pt-6">
          <Link
            className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
            to="/quote"
          >
            Need a written estimate for an upcoming move?
          </Link>
        </div>
      </section>
    </>
  );
}
