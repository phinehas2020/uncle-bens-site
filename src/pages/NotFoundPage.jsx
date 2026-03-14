import { ButtonLink } from '../components/Button';
import { SEO } from '../components/SEO';

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." noindex />

      <section className="section">
        <div className="site-container text-center">
          <p className="text-sm text-slate-600">404</p>
          <h1 className="mt-4 text-4xl text-slate-900 sm:text-5xl">Page not found</h1>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-slate-700">
            The page you are looking for may have been moved or no longer exists.
          </p>
          <div className="mt-8 flex justify-center gap-4">
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
