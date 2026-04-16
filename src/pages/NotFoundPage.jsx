import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." noindex />

      <section className="section">
        <div className="wrap-narrow">
          <p className="eyebrow">Error 404</p>
          <h1 className="display-xl mt-5 text-balance">
            This page <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>isn't here</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-graphite)]">
            The address may have changed, or the page was never here to begin
            with. You can head home or drop us a note — we'll help you find what you were looking for.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/" className="btn btn-primary">Back to home</Link>
            <Link to="/contact" className="btn btn-ghost">Contact the office</Link>
          </div>
        </div>
      </section>
    </>
  );
}
