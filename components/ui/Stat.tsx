import CountUp from '@/components/motion/CountUp';
import { cn } from '@/lib/utils';

interface Props {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  size?: 'default' | 'lg';
}

export default function Stat({
  value,
  label,
  prefix,
  suffix,
  decimals = 0,
  className,
  size = 'default',
}: Props) {
  return (
    <div className={className}>
      <span className="rule-accent" aria-hidden />
      <p
        className={cn(
          'tabular mt-5 font-mono font-medium tracking-[-0.02em] text-ink-900',
          size === 'lg' ? 'text-4xl' : 'text-3xl',
        )}
      >
        <CountUp value={value} decimals={decimals} prefix={prefix} suffix={suffix} />
      </p>
      <p className="mt-2 text-sm text-ink-500">{label}</p>
    </div>
  );
}
