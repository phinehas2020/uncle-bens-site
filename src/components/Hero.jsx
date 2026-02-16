import { ButtonLink } from './Button';
import { site } from '../data/site';

export function Hero() {
  return (
    <section className="section-gap">
      <div className="wrap">
        <div className="max-w-2xl space-y-5">
          <h1 className="heading-xl">
            Your move, handled
            <br />
            start to finish.
          </h1>
          <p className="body-lg">
            Local and long-distance moves across Austin and Central Texas.
            Written quotes, careful crews, and clear communication since 2006.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink size="lg" to="/quote" variant="primary">
              Get a free quote
            </ButtonLink>
            <a
              className="text-sm font-semibold text-text-secondary hover:text-text transition-colors"
              href={`tel:${site.phone.digits}`}
            >
              or call {site.phone.display}
            </a>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg">
          <img
            src="/hero-image.png"
            alt="Quality Moving & Storage crew loading a truck in a Central Texas neighborhood"
            className="w-full object-cover"
            style={{ maxHeight: '28rem' }}
          />
        </div>

        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-muted">
          <span>20+ years in business</span>
          <span>15,000+ moves completed</span>
          <span>4.9/5 average rating</span>
          <span>Mon&ndash;Sat availability</span>
        </p>
      </div>
    </section>
  );
}
