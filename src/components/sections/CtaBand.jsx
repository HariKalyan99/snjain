import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { useQuote } from '../../context/QuoteContext';
import { company } from '../../data/company';

export default function CtaBand({
  title = 'Need a reliable supply partner?',
  body = 'Tell us your material requirement and volume. Our desk responds with availability, grade detail and pricing.',
}) {
  const { openQuote } = useQuote();
  return (
    <section className="bg-red">
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{body}</p>
          </Reveal>
          <Reveal custom={1} className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
            <Button variant="dark" onClick={openQuote}>
              Request a Quote
            </Button>
            <Button variant="ghost" href={company.phoneHref} arrow={false}>
              {company.phone}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
