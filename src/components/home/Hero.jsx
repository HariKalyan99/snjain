import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useQuote } from '../../context/QuoteContext';
import { maskUp, stagger, fadeUp } from '../../lib/motion';
import Counter from '../ui/Counter';
import { stats } from '../../data/company';

export default function Hero() {
  const ref = useRef(null);
  const { openQuote } = useQuote();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden bg-ink"
    >
      <motion.div style={{ y, scale }} className="pointer-events-none absolute inset-0">
        <img
          src="/img/hero/mainbg1.jpg"
          alt="Non-ferrous metal processing yard"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />

      {/* Content + stats in one column so nothing overlaps */}
      <div className="relative mx-auto flex min-h-0 w-full max-w-8xl flex-1 flex-col px-5 pt-28 sm:px-6 sm:pt-32 lg:px-10">
        <motion.div
          style={{ opacity }}
          className="flex min-h-0 flex-1 flex-col justify-end pb-8 sm:pb-10 lg:pb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
          >
            Est. 1965 · Bhiwandi, India · Non-Ferrous Metals
          </motion.span>

          <motion.h1
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-5xl font-display text-[2.6rem] font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:mt-6 sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            {['Trusted non-ferrous', 'metal & scrap', 'solutions.'].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  variants={maskUp}
                  custom={i}
                  className={`block ${i === 2 ? 'text-red' : ''}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-6 max-w-xl text-base leading-relaxed text-steel-200 sm:mt-7 sm:text-lg"
          >
            Supplying manufacturers, fabricators and exporters across India and global markets with consistent
            grades, inspected volume and dependable logistics.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <button
              onClick={openQuote}
              className="group inline-flex items-center justify-center gap-3 bg-red px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              Request a Quote
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </button>
            <Link
              to="/materials"
              className="group inline-flex items-center justify-center gap-3 border border-white/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-ink"
            >
              View Materials
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats — in flow below CTAs on desktop; mobile uses TrustSection */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="hidden shrink-0 border-t border-white/15 bg-ink/40 backdrop-blur-sm lg:block"
        >
          <div className="grid grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-5 xl:py-6 ${i > 0 ? 'border-l border-white/10 pl-6 xl:pl-8' : ''}`}
              >
                <p className="font-display text-2xl font-extrabold text-white xl:text-3xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/60 xl:text-xs xl:tracking-[0.16em]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
