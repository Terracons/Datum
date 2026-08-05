import type { Variants } from 'framer-motion';

/**
 * Motion here should read as an instrument settling on a value, not a
 * building being revealed. Shorter travel, faster settle, no parallax.
 */
export const ease = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
  settle: [0.22, 1, 0.36, 1],
} as const;

export const duration = {
  fast: 0.22,
  base: 0.42,
  slow: 0.7,
  hero: 0.95,
} as const;

export const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } },
};

export const riseSmall: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.base, ease: ease.out } },
};

/** Log rows enter left-to-right, like lines being written to a record. */
export const logRow: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: duration.base, ease: ease.settle } },
};

export const staggerParent = (stagger = 0.06, delay = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const viewportOnce = { once: true, margin: '-80px' } as const;
