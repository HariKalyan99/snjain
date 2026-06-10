import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { PhoneIcon } from '../ui/PhoneLink';
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
        <div className="grid items-center gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{body}</p>
          </Reveal>
          <Reveal custom={1} className="flex flex-col gap-3 sm:flex-row md:col-span-4 md:flex-col md:items-end lg:items-end">
            <Button variant="dark" onClick={openQuote}>
              Request a Quote
            </Button>
            <Button variant="ghost" href={company.phoneHref} arrow={false}>
              <span className="inline-flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4" />
                Call us
              </span>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
