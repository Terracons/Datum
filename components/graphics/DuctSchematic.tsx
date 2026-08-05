import { cn } from '@/lib/utils';

/**
 * Procedural single-line duct schematic. Deterministic from `seed`, so server
 * and client render identically and the site needs no photography.
 *
 * Reads as a mechanical plan: a supply trunk reducing across its run, branch
 * takeoffs to terminal boxes, diffusers, and the balancing dampers that turn
 * out to be the thing nobody can reach.
 */

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Props {
  seed?: number;
  className?: string;
  density?: number;
  /** Flags one terminal in the deviation colour, as a plan mark-up would. */
  flag?: boolean;
}

export default function DuctSchematic({ seed = 1, className, density = 1, flag = true }: Props) {
  const rand = mulberry32(seed * 7919);
  const W = 1200;
  const H = 620;

  const trunkY = 150;
  const branchCount = Math.max(4, Math.round(7 * density));
  const spacing = (W - 200) / branchCount;

  const branches = Array.from({ length: branchCount }, (_, i) => {
    const x = 120 + i * spacing + rand() * 18;
    const drop = 150 + rand() * 230;
    const terminals = 2 + Math.floor(rand() * 2);
    return { x, drop, terminals, damper: rand() > 0.45 };
  });

  const flagged = flag ? Math.floor(rand() * branchCount) : -1;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={cn('h-full w-full', className)}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      role="presentation"
    >
      {/* grid field */}
      <g stroke={'var(--g-ink-100)'} strokeWidth="1">
        {Array.from({ length: Math.floor(H / 40) }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2={W} y2={i * 40} />
        ))}
        {Array.from({ length: Math.floor(W / 40) }, (_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2={H} />
        ))}
      </g>

      {/* air handler */}
      <g>
        <rect x="24" y={trunkY - 46} width="76" height="92" fill={'var(--g-paper-raised)'} stroke={'var(--g-ink-700)'} strokeWidth="1.5" />
        <line x1="46" y1={trunkY - 46} x2="46" y2={trunkY + 46} stroke={'var(--g-ink-300)'} strokeWidth="1" />
        <line x1="66" y1={trunkY - 46} x2="66" y2={trunkY + 46} stroke={'var(--g-ink-300)'} strokeWidth="1" />
        <circle cx="83" cy={trunkY} r="12" fill="none" stroke={'var(--g-ink-700)'} strokeWidth="1.5" />
        <line x1="83" y1={trunkY - 12} x2="83" y2={trunkY + 12} stroke={'var(--g-ink-700)'} strokeWidth="1" />
      </g>

      {/* supply trunk, reducing across the run */}
      <path
        d={`M100 ${trunkY - 22} L${W - 60} ${trunkY - 9} L${W - 60} ${trunkY + 9} L100 ${trunkY + 22} Z`}
        fill={'var(--g-paper-sunken)'}
        stroke={'var(--g-ink-700)'}
        strokeWidth="1.5"
      />
      {/* centre line */}
      <line
        x1="100"
        y1={trunkY}
        x2={W - 60}
        y2={trunkY}
        stroke={'var(--g-ink-400)'}
        strokeWidth="1"
        strokeDasharray="10 4 2 4"
      />

      {branches.map((b, i) => {
        const isFlagged = i === flagged;
        const stroke = isFlagged ? 'var(--g-deviation)' : 'var(--g-ink-700)';
        const termY = trunkY + b.drop;

        return (
          <g key={i}>
            {/* branch takeoff */}
            <path
              d={`M${b.x - 11} ${trunkY} L${b.x - 11} ${termY} M${b.x + 11} ${trunkY} L${b.x + 11} ${termY}`}
              stroke={stroke}
              strokeWidth="1.5"
              fill="none"
            />
            {/* balancing damper */}
            {b.damper && (
              <g>
                <line
                  x1={b.x - 14}
                  y1={trunkY + 62}
                  x2={b.x + 14}
                  y2={trunkY + 62}
                  stroke={stroke}
                  strokeWidth="1"
                />
                <line
                  x1={b.x - 9}
                  y1={trunkY + 68}
                  x2={b.x + 9}
                  y2={trunkY + 56}
                  stroke={isFlagged ? 'var(--g-deviation)' : 'var(--g-pass)'}
                  strokeWidth="2"
                />
              </g>
            )}
            {/* terminal box */}
            <rect
              x={b.x - 26}
              y={termY}
              width="52"
              height="30"
              fill={'var(--g-paper-raised)'}
              stroke={stroke}
              strokeWidth="1.5"
            />
            <line x1={b.x - 26} y1={termY + 10} x2={b.x + 26} y2={termY + 10} stroke={'var(--g-ink-200)'} strokeWidth="1" />
            {/* diffuser runouts */}
            {Array.from({ length: b.terminals }, (_, t) => {
              const dx = b.x + (t - (b.terminals - 1) / 2) * 46;
              const dy = termY + 62;
              return (
                <g key={t}>
                  <path
                    d={`M${b.x} ${termY + 30} L${b.x} ${termY + 44} L${dx} ${termY + 44} L${dx} ${dy}`}
                    stroke={stroke}
                    strokeWidth="1"
                    fill="none"
                  />
                  <rect
                    x={dx - 13}
                    y={dy}
                    width="26"
                    height="13"
                    fill={isFlagged && t === 0 ? 'var(--g-deviation-wash)' : 'var(--g-paper-raised)'}
                    stroke={stroke}
                    strokeWidth="1"
                  />
                  <line x1={dx - 13} y1={dy + 4.5} x2={dx + 13} y2={dy + 4.5} stroke={'var(--g-ink-200)'} strokeWidth="0.75" />
                  <line x1={dx - 13} y1={dy + 9} x2={dx + 13} y2={dy + 9} stroke={'var(--g-ink-200)'} strokeWidth="0.75" />
                </g>
              );
            })}
            {/* tag */}
            <text
              x={b.x}
              y={termY - 8}
              textAnchor="middle"
              fill={isFlagged ? 'var(--g-deviation-ink)' : 'var(--g-ink-500)'}
              fontSize="11"
              fontFamily="ui-monospace, monospace"
              letterSpacing="0.5"
            >
              VAV-{String(i + 1).padStart(2, '0')}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
