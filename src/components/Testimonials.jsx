import { testimonials } from '../data/site';

export function Testimonials() {
  return (
    <section className="section-gap-sm" style={{ background: 'var(--color-bg-warm)' }}>
      <div className="wrap">
        <h2 className="heading-lg mb-8">What customers say</h2>

        <div className="grid-3">
          {testimonials.map((item) => (
            <figure className="card p-5" key={item.name}>
              <blockquote className="text-base leading-relaxed text-text-secondary">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-border pt-4">
                <p className="font-semibold text-text">{item.name}</p>
                <p className="mt-0.5 text-sm text-text-muted">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
