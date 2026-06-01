import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="flex min-h-[80vh] items-center bg-ink text-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <span className="eyebrow">Error 404</span>
          <h1 className="mt-6 font-display text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-8xl">
            Page not
            <br />
            found.
          </h1>
          <p className="mt-7 max-w-md text-base text-steel-200">
            The page you are looking for may have moved. Let's get you back to solid material.
          </p>
          <div className="mt-9">
            <Button variant="ghost" to="/">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
