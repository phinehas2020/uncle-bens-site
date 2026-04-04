import { ButtonLink } from '../components/Button';
import { SEO } from '../components/SEO';

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." noindex />

      <section className="section">
        <div className="site-container max-w-xl">
          <p className="font-sans text-sm font-medium tabular-nums text-slate-500">404</p>
          <h1 className="mt-3 text-4xl text-slate-900 sm:text-5xl">Page not found</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            The page you are looking for may have been moved or no longer exists.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink size="lg" to="/" variant="primary">
              Back to home
            </ButtonLink>
            <ButtonLink size="lg" to="/contact" variant="secondary">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
