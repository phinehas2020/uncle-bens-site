import { Link } from 'react-router-dom';
import { navigation, site } from '../data/site';
import { ButtonLink } from './Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bar">
      <div className="wrap">
        <div className="footer-grid">
          <div className="space-y-3">
            <p className="font-semibold text-text">{site.name}</p>
            <p className="text-sm text-text-secondary">{site.tagline}</p>
            <ButtonLink href={`tel:${site.phone.digits}`} size="sm" variant="primary">
              {site.phone.display}
            </ButtonLink>
          </div>

          <div>
            <p className="footer-heading">Pages</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link className="hover:text-text transition-colors" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-heading">Contact</p>
            <address className="not-italic space-y-2 text-sm text-text-secondary">
              <p>
                {site.address.street}<br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
              <p>
                <a className="hover:text-text transition-colors" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>{site.hours.summary}</p>
            </address>
          </div>

          <div>
            <p className="footer-heading">Service area</p>
            <p className="text-sm text-text-secondary">{site.serviceAreas.join(', ')}</p>
          </div>
        </div>

        <div className="footer-bottom flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} {site.name}</p>
          <p>{site.license}</p>
        </div>
      </div>
    </footer>
  );
}
