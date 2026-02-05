import { testimonials } from '../data/site';

export function Testimonials() {
  return (
    <section className="section-space-sm">
      <div className="layout-container space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Client Voice</p>
          <h2 className="section-title">
            Feedback from recent
            <span className="gold-gradient"> Central Texas moves.</span>
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure className="surface-card p-6" key={item.name}>
              <blockquote className="text-[1.02rem] leading-relaxed text-cloud/92">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-cobalt/25 pt-4">
                <p className="font-family-display text-2xl text-white">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-fog/80">
                  {item.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
