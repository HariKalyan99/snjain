import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/sections/PageHero';
import CtaBand from '../components/sections/CtaBand';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Counter from '../components/ui/Counter';
import ParallaxImage from '../components/ui/ParallaxImage';
import { sustainabilityImpact, sustainabilityPillars } from '../data/site';

export default function Sustainability() {
  return (
    <PageWrapper>
      <PageHero
        index="06"
        eyebrow="Sustainability"
        title={['Metal kept in', 'productive use.']}
        intro="Recycling is not a programme bolted on to our business — it is the business. Every tonne recovered is a tonne that does not need to be mined."
        image="/img/products/Aluminium_cabel_wire_scrap.jpg"
      />

      {/* Statement */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <p className="max-w-4xl font-display text-2xl font-bold uppercase leading-[1.15] tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Non-ferrous metals can be recycled again and again with no loss of properties. By recovering, sorting and
              re-supplying them, we keep their value in circulation — and out of landfill.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-ink py-20 text-white lg:py-24">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
            {sustainabilityImpact.map((s) => (
              <Reveal key={s.label} className="bg-ink p-8 lg:p-12">
                <p className="font-display text-6xl font-extrabold lg:text-7xl">
                  {s.display ? s.display : <Counter to={s.value} suffix={s.suffix} prefix={s.prefix || ''} />}
                </p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-200">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our responsibility"
                title={['A circular', 'metals economy.']}
              />
              <Reveal custom={2} className="mt-8">
                <ParallaxImage src="/img/about/3.jpg" alt="Recycling and recovery" className="aspect-[4/3] w-full" />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-px overflow-hidden border border-steel-100 bg-steel-100 sm:grid-cols-2">
                {sustainabilityPillars.map((p, i) => (
                  <Reveal key={p.title} custom={i} className="bg-white p-8 lg:p-10">
                    <span className="font-display text-sm font-bold text-red">{`0${i + 1}`}</span>
                    <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight text-ink">{p.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-steel-600">{p.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Recycle with a responsible partner."
        body="Have recoverable non-ferrous material? We sort, process and return it to productive use. Let's discuss your streams."
      />
    </PageWrapper>
  );
}
