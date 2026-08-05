import {
  AudioLines,
  ClipboardCheck,
  FlaskConical,
  RotateCcw,
  ShieldCheck,
  Waves,
  Wind,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const icons: Record<string, LucideIcon> = {
  Wind,
  Waves,
  ClipboardCheck,
  RotateCcw,
  ShieldCheck,
  AudioLines,
  FlaskConical,
};

export default function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Wind;
  return <Icon className={cn('h-5 w-5', className)} aria-hidden />;
}
