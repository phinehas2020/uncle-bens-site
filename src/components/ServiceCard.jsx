import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ServiceCard({ service }) {
  const { title, summary, highlights, image, id } = service;

  return (
    <article className="card-soft flex h-full flex-col">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100">
        <img
          alt={title}
          className="h-full w-full object-cover"
          height="800"
          loading="lazy"
          src={image}
          width="1200"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div>
          <div className="h-1 w-12 rounded-full bg-accent/75" />
          <h3 className="mt-4 font-sans text-[1.75rem] font-semibold tracking-tight text-slate-900">
            {title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700">{summary}</p>
        </div>

        <ul className="mt-6 grid gap-2.5 text-sm text-slate-700">
          {highlights.slice(0, 3).map((highlight) => (
            <li className="flex items-start gap-3" key={highlight}>
              <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span className="leading-snug">{highlight}</span>
            </li>
          ))}
        </ul>

        <Link
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-accent"
          to={`/services#${id}`}
        >
          See service details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
