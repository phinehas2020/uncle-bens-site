import { companyValues, processSteps, yearsInBusiness } from '../data/site';

export function About() {
  return (
    <section className="section-space-sm">
      <div className="layout-container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Our Standard</p>
            <h2 className="section-title">
              {yearsInBusiness} years of operational excellence.
            </h2>
            <p className="section-copy max-w-2xl">
              We are obsessive about consistency: clear communication, detailed
              handling protocols, and polished delivery that makes the hardest day
              of your year feel controlled.
            </p>
          </div>

          <div className="glass-panel space-y-5 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Signature Process
            </p>
            <div className="space-y-4">
              {processSteps.map((step) => (
                <div className="rounded-2xl border border-cobalt/25 bg-night/70 p-4" key={step.title}>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cloud/88">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {companyValues.map((value) => (
            <article className="surface-card p-6" key={value.title}>
              <h3 className="font-family-display text-3xl text-white">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cloud/86">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
