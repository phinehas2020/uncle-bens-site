import { Link } from 'react-router-dom';
import { navigation, publicContact, site } from '../data/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="site-container py-12 sm:py-14">
        <div className="grid gap-6 border-b border-slate-200 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-xl">
            <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">{site.displayName}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{site.tagline}</p>
          </div>

          <div className="flex flex-col items-start gap-2 lg:items-end">
            {publicContact.hasPhone ? (
              <a className="text-lg font-semibold text-slate-900 hover:text-accent" href={publicContact.phoneHref}>
                {site.phone.display}
              </a>
            ) : (
              <Link className="text-lg font-semibold text-slate-900 hover:text-accent" to="/contact">
                Talk through your move
              </Link>
            )}
            <Link
              className="text-sm text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
              to="/quote"
            >
              Start a written estimate
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.8fr]">
          <div>
            <div className="mt-5 grid gap-1 text-sm text-slate-600">
              {publicContact.hasPhone ? (
                <a className="font-semibold text-slate-900 hover:text-accent" href={publicContact.phoneHref}>
                  {site.phone.display}
                </a>
              ) : (
                <Link className="font-semibold text-slate-900 hover:text-accent" to="/contact">
                  Use the contact page
                </Link>
              )}
              {publicContact.hasEmail ? (
                <a className="hover:text-slate-900" href={publicContact.emailHref}>
                  {site.email}
                </a>
              ) : (
                <p>{site.officeLabel}</p>
              )}
              {site.address ? (
                <>
                  <p>{site.address.street}</p>
                  <p>
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </p>
                </>
              ) : (
                <p>Austin, Round Rock, and nearby Central Texas cities.</p>
              )}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Pages</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link className="hover:text-slate-900" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Office notes</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-600">
              <p>{site.hours.summary}</p>
              <p>{site.complianceNote}</p>
              <p>Service area: Austin, Round Rock, Cedar Park, Georgetown, Leander, and nearby Central Texas cities.</p>
              <Link
                className="mt-2 inline-flex w-fit text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                to="/quote"
              >
                Request a written estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5 text-sm text-slate-500">
          <p>&copy; {currentYear} {site.copyrightLabel}</p>
        </div>
      </div>
    </footer>
  );
}
