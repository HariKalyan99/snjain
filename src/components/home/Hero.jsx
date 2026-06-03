import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useQuote } from '../../context/QuoteContext';
import { maskUp, stagger, fadeUp } from '../../lib/motion';
import Counter from '../ui/Counter';
import { stats } from '../../data/company';
import { media } from '../../data/media';
import { useSiteAudio } from '../../context/SiteAudioContext';
import useHeroTopGap from '../../hooks/useHeroTopGap';

const VIDEO_LOAD_TIMEOUT_MS = 12000;

export default function Hero() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const { openQuote } = useQuote();
  const { enableAudible } = useSiteAudio();
  const heroTopGapPx = useHeroTopGap();
  const compactHero = heroTopGapPx != null;
  const [usePoster, setUsePoster] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const video = videoRef.current;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const showPoster = () => setUsePoster(true);

    if (mq.matches) {
      showPoster();
      return undefined;
    }

    if (!video) return undefined;

    const onError = () => showPoster();
    video.addEventListener('error', onError);

    const loadTimer = window.setTimeout(() => {
      if (video.readyState < 2) showPoster();
    }, VIDEO_LOAD_TIMEOUT_MS);

    const syncPlayback = () => {
      if (mq.matches) {
        video.pause();
        showPoster();
      } else {
        video.play().catch(showPoster);
      }
    };

    syncPlayback();
    mq.addEventListener('change', syncPlayback);

    return () => {
      mq.removeEventListener('change', syncPlayback);
      video.removeEventListener('error', onError);
      window.clearTimeout(loadTimer);
    };
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] max-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      <motion.div style={{ y, scale }} className="pointer-events-none absolute inset-0">
        <img
          src={media.hero.poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        {!usePoster && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={media.hero.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={media.hero.poster}
            aria-hidden="true"
            onError={() => setUsePoster(true)}
          />
        )}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />

      <div
        className="relative mx-auto flex h-full min-h-0 w-full max-w-8xl flex-col px-5 pb-0 pt-24 sm:px-6 sm:pt-28 lg:px-10 lg:pt-32"
        style={heroTopGapPx != null ? { paddingTop: heroTopGapPx } : undefined}
      >
        <motion.div
          style={{ opacity }}
          className={`flex min-h-0 flex-1 flex-col pb-6 sm:pb-8 lg:pb-10 ${
            compactHero ? 'justify-start overflow-y-auto overscroll-contain' : 'justify-end'
          }`}
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
            className={
              compactHero
                ? 'mt-3 max-w-5xl font-display text-[1.85rem] font-extrabold uppercase leading-[0.92] tracking-tight text-white min-[400px]:text-[2.1rem] sm:text-4xl md:text-5xl lg:text-6xl'
                : 'mt-4 max-w-5xl font-display text-[2rem] font-extrabold uppercase leading-[0.92] tracking-tight text-white min-[400px]:text-[2.35rem] sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]'
            }
          >
            {['Trading non-ferrous', 'metals & scrap', 'solutions.'].map((line, i) => (
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
            className={
              compactHero
                ? 'mt-4 max-w-xl text-base leading-relaxed text-steel-200'
                : 'mt-5 max-w-xl text-base leading-relaxed text-steel-200 sm:mt-6 sm:text-lg'
            }
          >
            Supplying manufacturers, fabricators and exporters across India and global markets with consistent
            grades, inspected volume and dependable logistics.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className={`flex flex-col gap-3 sm:flex-row ${compactHero ? 'mt-5 sm:mt-6' : 'mt-7 sm:mt-8'}`}
          >
            <button
              type="button"
              onClick={() => {
                void enableAudible();
                openQuote();
              }}
              className={`group inline-flex items-center justify-center gap-3 bg-red text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-ink ${
                compactHero ? 'px-7 py-3.5' : 'px-8 py-4'
              }`}
            >
              Request a Quote
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </button>
            <Link
              to="/materials"
              onClick={() => void enableAudible()}
              className={`group inline-flex items-center justify-center gap-3 border border-white/30 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-ink ${
                compactHero ? 'px-7 py-3.5' : 'px-8 py-4'
              }`}
            >
              View Materials
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </motion.div>
        </motion.div>

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
                className={`${compactHero ? 'py-3' : 'py-4 xl:py-5'} ${i > 0 ? 'border-l border-white/10 pl-6 xl:pl-8' : ''}`}
              >
                <p
                  className={`font-display font-extrabold text-white ${compactHero ? 'text-xl xl:text-2xl' : 'text-2xl xl:text-3xl'}`}
                >
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
