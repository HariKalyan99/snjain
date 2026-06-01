import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/sections/PageHero';
import CtaBand from '../components/sections/CtaBand';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import ParallaxImage from '../components/ui/ParallaxImage';
import { values, milestones } from '../data/company';

export default function About() {
  return (
    <PageWrapper>
      <PageHero
        index="01"
        eyebrow="About Us"
        title={['Three generations', 'of metal trade.']}
        intro="A family enterprise built on integrity since 1965 — supplying non-ferrous metals and scrap to industry across India and global markets."
        image="/img/about/1.jpg"
      />

      {/* Intro statement */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-display text-2xl font-bold uppercase leading-[1.15] tracking-tight text-ink sm:text-3xl lg:text-4xl">
                  Sha Mulchand Navalram Jain was built on a single idea — to do business with integrity. Over
                  generations, that idea became a legacy defined by trust, precision and quiet excellence.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:pl-6">
              <Reveal custom={1}>
                <p className="text-base leading-relaxed text-steel-600">
                  We are a trusted name in non-ferrous metals and scrap, serving manufacturers, fabricators and
                  exporters across India and global markets with consistency and clarity.
                </p>
              </Reveal>
              <Reveal custom={2}>
                <p className="mt-5 text-base leading-relaxed text-steel-600">
                  Driven by our Bhiwandi warehouse, our operations are fast, efficient and reliable — built to deliver
                  without compromise. More than suppliers, we are partners focused on building lasting value.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-steel-50 py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-px overflow-hidden border border-steel-200 bg-steel-200 lg:grid-cols-2">
            <Reveal className="bg-steel-50 p-10 lg:p-14">
              <span className="eyebrow">Mission</span>
              <p className="mt-7 font-display text-2xl font-bold uppercase leading-[1.15] tracking-tight text-ink lg:text-3xl">
                To supply industry with non-ferrous metal it can depend on — graded accurately, delivered consistently
                and traded honestly.
              </p>
            </Reveal>
            <Reveal custom={1} className="bg-steel-50 p-10 lg:p-14">
              <span className="eyebrow">Vision</span>
              <p className="mt-7 font-display text-2xl font-bold uppercase leading-[1.15] tracking-tight text-ink lg:text-3xl">
                To remain a benchmark for trust in the non-ferrous trade while advancing a circular metals economy for
                the next generation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="What we stand for"
            title={['Values that hold', 'across decades.']}
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-steel-100 bg-steel-100 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.no} custom={i} className="bg-white p-8 lg:p-10">
                <span className="font-display text-sm font-bold text-red">{v.no}</span>
                <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-ink">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-steel-600">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <SectionHeading light eyebrow="Our journey" title={['Six decades,', 'one principle.']} />
          <div className="mt-14 border-t border-white/10">
            {milestones.map((m, i) => (
              <Reveal key={m.year} custom={i} className="grid gap-4 border-b border-white/10 py-9 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-3">
                  <span className="font-display text-3xl font-extrabold text-red lg:text-4xl">{m.year}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight">{m.title}</h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-base leading-relaxed text-steel-200">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership message */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <ParallaxImage src="/img/about/4.jpg" alt="Leadership at the facility" className="aspect-[4/5] w-full" />
            </div>
            <div className="lg:col-span-7 lg:pl-6">
              <Reveal>
                <span className="eyebrow">A message from the firm</span>
              </Reveal>
              <Reveal custom={1}>
                <p className="mt-7 font-display text-2xl font-bold uppercase leading-[1.2] tracking-tight text-ink lg:text-3xl">
                  &ldquo;We have never seen ourselves as merely a supplier. Procurement teams plan their production
                  around our material, and protecting that trust is the whole of our business.&rdquo;
                </p>
              </Reveal>
              <Reveal custom={2}>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                  Sha Mulchand Navalram Jain
                </p>
                <p className="text-sm text-steel-400">Non-Ferrous Metals · Bhiwandi, India</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageWrapper>
  );
}
