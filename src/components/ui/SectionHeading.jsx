import Reveal from './Reveal';
import { maskUp, stagger } from '../../lib/motion';
import { motion } from 'framer-motion';

/**
 * Standard section heading with eyebrow, masked-line title and optional intro.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  light = false,
  className = '',
}) {
  const lines = Array.isArray(title) ? title : [title];
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignment} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <motion.h2
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className={`mt-6 font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span variants={maskUp} custom={i} className="block">
              {line}
            </motion.span>
          </span>
        ))}
      </motion.h2>
      {intro && (
        <Reveal custom={1}>
          <p className={`mt-7 max-w-xl text-base leading-relaxed sm:text-lg ${light ? 'text-steel-200' : 'text-steel-600'}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
