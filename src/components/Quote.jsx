import { ContactForm } from './ContactForm';

export function Quote() {
  return (
    <section className="section">
      <div className="site-container max-w-3xl">
        <div className="border border-slate-200 bg-white p-6 sm:p-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-slate-900 sm:text-4xl">Request a quote</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              Share the route, timing, and the details that affect access or handling. The quote
              form uses the same honest submission states as the main contact flow.
            </p>
          </div>

          <div className="mt-8">
            <ContactForm variant="quote" />
          </div>
        </div>
      </div>
    </section>
  );
}
