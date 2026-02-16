import { Link } from 'react-router-dom';
import { navigation, site } from '../data/site';
import { ButtonLink } from './Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="site-container">
        <div className="grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-slate-900">{site.name}</p>
            <p className="text-sm leading-relaxed text-slate-600">{site.tagline}</p>
            <ButtonLink href={`tel:${site.phone.digits}`} size="sm" variant="primary">
              {site.phone.display}
            </ButtonLink>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Pages</p>
            <ul className="space-y-2 text-sm text-slate-600">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link className="hover:text-slate-900" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 text-sm text-slate-600">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            <address className="not-italic">
              <p>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
              <p>
                <a className="hover:text-slate-900" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>{site.hours.summary}</p>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-200 py-3 text-xs text-slate-500">
          <p>&copy; {currentYear} {site.name}</p>
          <p>{site.license}</p>
        </div>
      </div>
    </footer>
  );
}
