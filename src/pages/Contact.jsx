import { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/sections/PageHero';
import Reveal from '../components/ui/Reveal';
import { useQuote } from '../context/QuoteContext';
import { company } from '../data/company';

function istTime() {
  return new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

const field =
  'w-full border-b border-steel-200 bg-transparent py-4 text-base text-ink placeholder:text-steel-400 outline-none transition-colors focus:border-ink';

export default function Contact() {
  const { openQuote } = useQuote();
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(company.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('Submitted At (IST)', istTime());
    try {
      const res = await fetch(company.formspree, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <PageWrapper>
      <PageHero
        index="08"
        eyebrow="Contact"
        title={['Let’s talk', 'material.']}
        intro="Procurement teams, manufacturers and exporters — reach our desk directly for availability, grades, pricing and logistics."
        image="/img/hero/mainbg2.jpg"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink lg:text-4xl">
                  Send an enquiry
                </h2>
                <p className="mt-4 text-base text-steel-600">
                  Share a few details and our team will respond. For a formal quotation, use the quote request.
                </p>
              </Reveal>

              <Reveal custom={1}>
                <form onSubmit={handleSubmit} className="mt-10 space-y-7">
                  <input type="hidden" name="Form Type" value="Contact Form" />
                  <div className="grid gap-7 sm:grid-cols-2">
                    <input className={field} type="text" name="Name" placeholder="Your name *" required />
                    <input className={field} type="tel" name="Phone" placeholder="Your phone *" required />
                  </div>
                  <div className="grid gap-7 sm:grid-cols-2">
                    <input className={field} type="email" name="Email" placeholder="Your email *" required />
                    <input className={field} type="text" name="Company" placeholder="Company" />
                  </div>
                  <textarea
                    className={`${field} h-28 resize-none`}
                    name="Message"
                    placeholder="Your message *"
                    required
                  />

                  {status === 'success' && (
                    <p className="text-sm font-medium text-green-600">
                      Message sent successfully. We will be in touch shortly.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm font-medium text-red">Something went wrong. Please try again or call us.</p>
                  )}

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-red disabled:opacity-60"
                    >
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </button>
                    <button
                      type="button"
                      onClick={openQuote}
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-ink underline-offset-4 hover:underline"
                    >
                      Or request a quote
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>

            {/* Details */}
            <div className="lg:col-span-5 lg:border-l lg:border-steel-100 lg:pl-16">
              <Reveal className="space-y-10">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red">Call</p>
                  <a href={company.phoneHref} className="mt-3 block font-display text-2xl font-bold text-ink hover:text-red">
                    {company.phone}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red">Email</p>
                  <button onClick={copyEmail} className="mt-3 block font-display text-2xl font-bold text-ink hover:text-red">
                    {company.email}
                  </button>
                  <span className="text-xs text-steel-400">{copied ? 'Copied to clipboard' : 'Click to copy'}</span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red">Facility</p>
                  <p className="mt-3 text-base text-ink">
                    {company.address.facility}
                    <br />
                    {company.address.city}, {company.address.region}
                  </p>
                  <a
                    href={company.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-red hover:underline"
                  >
                    View on map &rarr;
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red">Business hours</p>
                  <ul className="mt-3 space-y-1.5 text-base text-ink">
                    {company.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6">
                        <span className="text-steel-600">{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-steel-50">
        <div className="h-[420px] w-full grayscale">
          <iframe
            title="Bhiwandi facility location"
            src="https://www.google.com/maps?q=Bhiwandi,Maharashtra,India&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </PageWrapper>
  );
}
