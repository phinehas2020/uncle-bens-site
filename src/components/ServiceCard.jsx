import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ServiceCard({ service, index = 0 }) {
  const { title, summary, highlights, image } = service;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="card-soft overflow-hidden group flex flex-col h-full bg-white hover:border-slate-300"
    >
      <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden bg-slate-100 border-b border-slate-100">
        <img
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          height="800"
          loading="lazy"
          src={image}
          width="1200"
        />
      </div>

      <div className="flex flex-col flex-1 p-8 pb-10 space-y-5 bg-white relative z-20">
        <div>
          <h3 className="text-2xl font-bold font-serif text-slate-900 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {summary}
          </p>
        </div>

        <ul className="grid gap-3.5 flex-1 mt-6">
          {highlights.map((highlight) => (
            <li className="flex items-start gap-3.5 text-sm text-slate-600" key={highlight}>
              <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent/60" />
              <span className="leading-snug">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="pt-8 mt-auto flex items-center justify-between">
          <span className="text-[0.9rem] font-bold tracking-wide uppercase text-slate-900 group-hover:text-accent transition-colors">Learn more</span>
          <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-colors">
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
