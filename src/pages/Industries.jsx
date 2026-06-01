import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/sections/PageHero';
import CtaBand from '../components/sections/CtaBand';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { industries } from '../data/site';

export default function Industries() {
  return (
    <PageWrapper>
      <PageHero
        index="04"
        eyebrow="Industries Served"
        title={['Material for the', 'industries that', 'build things.']}
        intro="From foundries to fabricators, our non-ferrous metals feed production across the sectors that depend on dependable supply."
        image="/img/hero/mainbg3.jpg"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Where our metal goes"
            title={['Eight sectors,', 'one standard of supply.']}
            intro="Each industry has its own grade and consistency demands. We match material to requirement and protect the schedule your production runs on."
          />

          <div className="mt-14 grid gap-px overflow-hidden border border-steel-100 bg-steel-100 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal
                key={ind.no}
                custom={i % 4}
                className="group bg-white p-8 transition-colors duration-300 hover:bg-ink lg:p-10"
              >
                <span className="font-display text-sm font-bold text-red">{ind.no}</span>
                <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-ink transition-colors duration-300 group-hover:text-white">
                  {ind.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-steel-600 transition-colors duration-300 group-hover:text-steel-200">
                  {ind.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="How we work with buyers" title={['Supply that fits', 'your operation.']} />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-px border-t border-steel-200">
                {[
                  ['Programme supply', 'Recurring deliveries scheduled around your production calendar, with buffer stock held against demand.'],
                  ['Specification matching', 'Grades and alloys sourced to the exact chemistry and form your process requires.'],
                  ['Documented consignments', 'Every dispatch is weighed, graded and documented so goods-inward matches the purchase order.'],
                  ['Single point of contact', 'A direct line to our desk for pricing, availability and logistics — no layers in between.'],
                ].map(([title, body], i) => (
                  <Reveal key={title} custom={i} className="border-b border-steel-200 py-7">
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">{title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel-600">{body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Supplying your sector?"
        body="Tell us your industry and material requirement. We will match grade, volume and delivery cadence to your operation."
      />
    </PageWrapper>
  );
}
