export function FAQ() {
  const faqs = [
    {
      question: "Do you require a deposit?",
      answer: "We typically require a small deposit to secure your moving date, which is fully refundable up to 48 hours before your scheduled move.",
    },
    {
      question: "What is your valuation coverage?",
      answer: "We offer standard released value protection at no additional cost. For comprehensive coverage, we also offer full value protection options so you have total peace of mind.",
    },
    {
      question: "How do schedule windows work?",
      answer: "We provide a confirmed arrival window when you book. On moving day, our crew will text you with a precise ETA and updates so you are never left guessing.",
    },
    {
      question: "Are there surcharges for stairs or long-carries?",
      answer: "Access factors like flights of stairs, elevators, or long walks from the truck are checked before quoting and included in your initial written estimate. We don't surprise you with hidden day-of fees.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel or reschedule your move without any penalty up to 48 hours before your scheduled moving date.",
    },
    {
      question: "What could change the final estimate?",
      answer: "Your written estimate is binding based on the inventory and access details provided. Pricing only changes if you request additional services or add significant items to the shipment on moving day.",
    }
  ];

  return (
    <section className="section bg-[#faf8f5] border-t border-slate-200">
      <div className="site-container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">
            Important details, upfront
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Straight answers on how pricing, protection, and scheduling work.
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-medium text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
