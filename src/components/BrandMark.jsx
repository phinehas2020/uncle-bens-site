/**
 * A hand-set style service seal. Not a logo — a mark.
 * Renders the business name around the rim with an anchor glyph in the center.
 * Two variants: "seal" (ornamental, used as accent) and "stamp" (rectangular postmark look).
 */

export function BrandSeal({
  size = 140,
  color = 'var(--color-ink)',
  ringColor,
  className = '',
  labelTop = 'QUALITY MOVING & STORAGE',
  labelBottom = 'ROUND ROCK · TEXAS',
  center = '•',
}) {
  const r = 48;
  const uid = `seal-${labelTop.length}-${labelBottom.length}`;
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 120 120"
      width={size}
      height={size}
      style={{ color }}
    >
      <defs>
        <path id={`${uid}-top`} d={`M 60,60 m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0`} />
        <path id={`${uid}-bot`} d={`M 60,60 m -${r + 2},2 a ${r + 2},${r + 2} 0 1,0 ${(r + 2) * 2},0`} />
      </defs>

      {/* Outer dotted ring */}
      <circle
        cx="60"
        cy="60"
        r="56"
        fill="none"
        stroke={ringColor || 'currentColor'}
        strokeWidth="0.8"
        strokeDasharray="1 3"
        opacity="0.6"
      />
      {/* Inner ring */}
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />

      {/* Arced top label */}
      <text fontSize="6.2" letterSpacing="2.6" fill="currentColor" fontFamily="var(--font-sans)" fontWeight="500">
        <textPath href={`#${uid}-top`} startOffset="50%" textAnchor="middle">
          {labelTop}
        </textPath>
      </text>

      {/* Arced bottom label (mirrored via second path) */}
      <text fontSize="5.2" letterSpacing="2.8" fill="currentColor" fontFamily="var(--font-sans)" fontWeight="400" opacity="0.8">
        <textPath href={`#${uid}-bot`} startOffset="50%" textAnchor="middle">
          {labelBottom}
        </textPath>
      </text>

      {/* Side ornaments */}
      <g opacity="0.55">
        <circle cx="12" cy="60" r="0.9" fill="currentColor" />
        <circle cx="108" cy="60" r="0.9" fill="currentColor" />
      </g>

      {/* Center mark */}
      <text
        x="60"
        y="64"
        fontSize="22"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-display)"
        fontStyle="italic"
        fontWeight="400"
      >
        {center}
      </text>
      <line x1="36" y1="74" x2="84" y2="74" stroke="currentColor" strokeWidth="0.6" opacity="0.55" />
      <text x="60" y="82" fontSize="4.2" letterSpacing="1.8" textAnchor="middle" fill="currentColor" fontFamily="var(--font-sans)">
        EST. TEXAS
      </text>
    </svg>
  );
}

/**
 * Hand-drawn-looking underline stroke for highlighted words in display type.
 * Slight wobble in the path keeps it from feeling machine-generated.
 */
export function ScribbleUnderline({
  className = '',
  color = 'var(--color-brand)',
  thickness = 3,
  variant = 'curve',
}) {
  const d = variant === 'double'
    ? 'M2 8 C 60 2, 140 14, 220 6 M4 14 C 70 10, 150 20, 218 12'
    : 'M3 11 C 40 3, 90 16, 140 6 S 210 14, 224 7';
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 228 18"
      preserveAspectRatio="none"
      fill="none"
      stroke={color}
      strokeWidth={thickness}
      strokeLinecap="round"
    >
      <path d={d} />
    </svg>
  );
}

/**
 * A small editorial "№" numeral marker — the kind you'd see in a magazine table of contents.
 */
export function Numeral({ value, label, className = '' }) {
  return (
    <div className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-display text-[0.9em] italic text-[var(--color-dust)]">№</span>
      <span className="font-display text-[1.15em] tnum text-[var(--color-ink)]">
        {String(value).padStart(2, '0')}
      </span>
      {label ? (
        <span className="ml-1 text-[0.72em] uppercase tracking-[0.18em] text-[var(--color-stone)]">
          {label}
        </span>
      ) : null}
    </div>
  );
}

/**
 * Footer / back-matter address stamp — looks like a postmark.
 */
export function AddressStamp({ className = '' }) {
  return (
    <div className={`inline-flex items-center gap-3 rounded-md border border-white/25 px-3 py-2 text-[0.72rem] uppercase tracking-[0.22em] ${className}`}>
      <span>Made in Round Rock</span>
      <span aria-hidden="true" className="h-3 w-px bg-white/30" />
      <span>TX · 78681</span>
    </div>
  );
}
