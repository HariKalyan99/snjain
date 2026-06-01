import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import ParallaxImage from '../ui/ParallaxImage';
import Counter from '../ui/Counter';

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="relative">
              <ParallaxImage
                src="/img/about/2.jpg"
                alt="Industrial metal warehousing"
                className="aspect-[4/5] w-full"
              />
              <div className="absolute -bottom-px -right-px hidden bg-red px-8 py-7 text-white sm:block">
                <p className="font-display text-5xl font-extrabold leading-none">
                  <Counter to={60} suffix="+" />
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/80">Years of trade</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <Reveal>
              <span className="eyebrow">Our story</span>
            </Reveal>
            <Reveal custom={1}>
              <h2 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-ink sm:text-5xl">
                A legacy of trust in non-ferrous metals.
              </h2>
            </Reveal>
            <Reveal custom={2}>
              <p className="mt-7 text-base leading-relaxed text-steel-600 sm:text-lg">
                Sha Mulchand Navalram Jain was built on a single idea — to do business with integrity. Over
                generations, that idea became a legacy defined by trust, precision and quiet excellence.
              </p>
            </Reveal>
            <Reveal custom={3}>
              <p className="mt-5 text-base leading-relaxed text-steel-600">
                Today we are a trusted name in non-ferrous metals and scrap, serving clients across India and global
                markets. Driven by our Bhiwandi warehouse, our operations are fast, efficient and reliable — built to
                deliver without compromise.
              </p>
            </Reveal>
            <Reveal custom={4} className="mt-9">
              <Button variant="dark" to="/about">
                More About Us
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
