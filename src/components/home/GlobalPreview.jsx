import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import Counter from '../ui/Counter';
import { globalStats } from '../../data/site';

export default function GlobalPreview() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <img
        src="/img/hero/mainbg4.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">Global presence</span>
            </Reveal>
            <Reveal custom={1}>
              <h2 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Supplying India.
                <br />
                Trading worldwide.
              </h2>
            </Reveal>
            <Reveal custom={2}>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-steel-200 sm:text-lg">
                Anchored by our Bhiwandi hub and connected to international trade corridors, we move material across
                borders with clean documentation and predictable logistics.
              </p>
            </Reveal>
            <Reveal custom={3} className="mt-9">
              <Button variant="ghost" to="/global-presence">
                Explore Our Reach
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pl-10">
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
              {globalStats.map((s) => (
                <Reveal key={s.label} className="bg-ink p-8 lg:p-10">
                  <p className="font-display text-5xl font-extrabold lg:text-6xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/55">{s.label}</p>
                </Reveal>
              ))}
            </div>
            <Reveal custom={2} className="mt-5">
              <Link
                to="/global-presence"
                className="block border border-white/10 p-6 text-sm text-white/70 transition-colors hover:border-red hover:text-white"
              >
                Domestic distribution · Export &amp; import corridors · Cross-border trade &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
