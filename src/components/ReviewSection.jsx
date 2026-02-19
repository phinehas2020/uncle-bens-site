import { site } from '../data/site';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function ReviewSection({ heading = 'What customers say', reviews }) {
  return (
    <section className="section bg-slate-100 relative overflow-hidden isolate">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
      <div className="site-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center flex flex-col items-center"
        >
          <p className="subtle-badge">{site.reviewSummary || 'Trusted reviews'}</p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">{heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl text-balance">
            We earn repeat work through reliability, care, and transparent communication.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="card-soft p-8 bg-white flex flex-col justify-between"
              key={review.name}
            >
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-slate-800 font-medium tracking-tight">
                  "{review.quote}"
                </blockquote>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm border-none font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs font-medium text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
