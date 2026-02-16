import { testimonials } from '../data/site';

export function Testimonials() {
  return (
    <section className="section-space-sm">
      <div className="layout-shell">
        <div className="section-heading">
          <p className="kicker">Proof from recent moves</p>
          <h2 className="section-title">Customer outcomes, not just promises.</h2>
        </div>

        <div className="section-space-sm">
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <figure className="surface-card" key={item.name}>
                <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold-soft">
                  Verified review
                </p>
                <blockquote className="text-[1.02rem] leading-relaxed text-cloud">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-cobalt-soft/30 pt-4">
                  <p className="font-family-display text-2xl text-pearl">{item.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-fog">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
