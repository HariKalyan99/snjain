import Reveal from '../ui/Reveal';
import Counter from '../ui/Counter';
import SectionHeading from '../ui/SectionHeading';
import { stats, trustPoints } from '../../data/company';

export default function TrustSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        {/* Mobile stats */}
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-steel-100 bg-steel-100 lg:hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-6">
              <p className="font-display text-3xl font-extrabold text-ink">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-steel-400">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:mt-0 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why procurement teams choose us"
              title={['Built to be', 'relied upon.']}
              intro="Industrial buyers value predictability above all. Six decades of trade have shaped a business designed to deliver exactly what is ordered, on schedule, every cycle."
            />
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden border border-steel-100 bg-steel-100 sm:grid-cols-2">
              {trustPoints.map((point, i) => (
                <Reveal key={point.title} custom={i} className="bg-white p-8 lg:p-10">
                  <span className="font-display text-sm font-bold text-red">{`0${i + 1}`}</span>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-steel-600">{point.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
