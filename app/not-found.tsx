import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TickRule from '@/components/graphics/TickRule';

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center py-32">
      <Container>
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 max-w-2xl text-4xl tracking-[-0.025em]">
          No reading at this location.
        </h1>
        <p className="measure mt-6 text-lg text-ink-600">
          The page you asked for is not here. It may have been moved, or the reference may have
          been mistyped. The services index and the sample reports are the two most likely places
          you were headed.
        </p>
        <TickRule className="mt-10 max-w-sm" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Home</Button>
          <Button href="/services" variant="secondary">
            Services
          </Button>
          <Button href="/reports" variant="secondary">
            Sample reports
          </Button>
        </div>
      </Container>
    </section>
  );
}
