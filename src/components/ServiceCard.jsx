import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ServiceCard({ service, index = 0 }) {
  const { title, summary, details, highlights, image, id } = service;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="card-soft overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          height="800"
          loading="lazy"
          src={image}
          width="1200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10 opacity-60" />
      </div>

      <div className="flex flex-col flex-1 p-8 space-y-5 bg-white relative z-20">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {summary}
          </p>
        </div>

        <ul className="grid gap-3 flex-1 mt-4">
          {highlights.map((highlight) => (
            <li className="flex items-start gap-3 text-sm text-slate-700" key={highlight}>
              <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="leading-snug">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="pt-6 mt-auto border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-900">Learn more</span>
          <ArrowRight className="w-5 h-5 text-accent transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
}
