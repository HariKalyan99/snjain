import { motion } from 'framer-motion';
import { maskUp, stagger, fadeUp } from '../../lib/motion';

/**
 * Inner-page hero with a dark industrial image, eyebrow, masked title and intro.
 */
export default function PageHero({ eyebrow, title, intro, image, index }) {
  const lines = Array.isArray(title) ? title : [title];
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-ink pb-16 pt-40 sm:min-h-[72vh] lg:pb-20">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img src={image} alt="" className="h-full w-full object-cover opacity-45" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />

      <div className="relative mx-auto w-full max-w-8xl px-5 sm:px-6 lg:px-10">
        {index && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 block font-display text-sm font-bold uppercase tracking-[0.3em] text-red"
          >
            {index}
          </motion.span>
        )}
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-5xl font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span variants={maskUp} custom={i} className="block">
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>
        {intro && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 max-w-2xl text-base leading-relaxed text-steel-200 sm:text-lg"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
