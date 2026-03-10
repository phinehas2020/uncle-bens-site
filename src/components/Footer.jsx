import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Truck } from 'lucide-react';
import { navigation, site } from '../data/site';
import { ButtonLink } from './Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="site-container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.7fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-[#faf8f5] text-accent">
                <Truck className="h-5 w-5" />
              </div>
              <span className="text-xl font-semibold text-slate-900">{site.name}</span>
            </div>
            <p className="max-w-md text-base leading-relaxed text-slate-600">{site.tagline}</p>
            <div>
              <ButtonLink href={`tel:${site.phone.digits}`} size="sm" variant="secondary">
                {site.phone.display}
              </ButtonLink>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-medium text-slate-600">Navigation</p>
            <ul className="space-y-3 font-medium text-slate-600">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link className="transition-colors hover:text-slate-900" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-medium text-slate-600">Contact</p>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <address className="not-italic">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a className="transition-colors hover:text-slate-900" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p>{site.hours.summary}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span>{site.license}</span>
            <span>TxDMV: {site.tdmvPhone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
