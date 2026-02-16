export function ServiceCard({ service }) {
  const { title, summary, details, highlights, image } = service;

  return (
    <article className="card-soft overflow-hidden">
      <img
        alt={title}
        className="h-56 w-full object-cover"
        height="800"
        loading="lazy"
        src={image}
        width="1200"
      />
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{summary}</p>
        <p className="text-sm leading-relaxed text-slate-600">{details}</p>
        <ul className="grid gap-2">
          {highlights.map((highlight) => (
            <li className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-600" key={highlight}>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
