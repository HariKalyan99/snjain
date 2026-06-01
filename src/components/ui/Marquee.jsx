/**
 * Seamless horizontal marquee. Duplicates children for an infinite loop.
 */
export default function Marquee({ items, className = '', separator = '/' }) {
  const row = [...items, ...items];
  return (
    <div className={`group flex overflow-hidden ${className}`}>
      <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-8 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              {item}
            </span>
            <span className="text-red">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
