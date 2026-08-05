import Container from '@/components/ui/Container';
import Stat from '@/components/ui/Stat';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { findings } from '@/content/company';

export default function FindingsCounter() {
  return (
    <section className="border-b border-ink-100 bg-paper-raised py-14">
      <Container>
        <Stagger className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {findings.map((f) => (
            <StaggerItem key={f.label}>
              <Stat
                value={f.value}
                label={f.label}
                prefix={f.prefix}
                suffix={f.suffix}
                decimals={f.decimals}
              />
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-10 max-w-2xl text-sm text-ink-500">
          Twenty years of findings. The first number is the one we are actually judged on: a
          deficiency documented is a deficiency somebody had the chance to fix before it became a
          building the facilities team fights for a decade.
        </p>
      </Container>
    </section>
  );
}
