import { site } from '../data/site';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function ReviewSection({ heading = 'People who trusted us with their homes.', reviews }) {
  return (
    <section className="section bg-slate-50 relative overflow-hidden isolate border-t border-slate-200/60">
      <div className="site-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center flex flex-col items-center"
        >
          <p className="subtle-badge border-transparent bg-slate-200 text-slate-700">{site.reviewSummary || 'Word of mouth'}</p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-serif">
            {heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 max-w-2xl text-balance">
            We don't just move boxes, we move families, routines, and lives. We're proud to share what that experience feels like.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="card-soft p-8 bg-white flex flex-col justify-between hover:border-slate-300"
              key={review.name}
            >
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-slate-800 font-medium tracking-tight">
                  "{review.quote}"
                </blockquote>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{review.name}</p>
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
