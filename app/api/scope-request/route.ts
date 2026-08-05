import { NextResponse } from 'next/server';
import { scopeRequestSchema } from '@/lib/scope-request';

/**
 * Rate limit. This endpoint is unauthenticated and, in production, dispatches
 * mail, so it is the one place on the site worth abusing. In-memory is enough
 * for a single instance; behind more than one, move this to Redis or Upstash.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound on a long-lived process.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }

  return recent.length > MAX_PER_WINDOW;
}

function clientKey(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request: Request) {
  if (rateLimited(clientKey(request))) {
    return NextResponse.json(
      { error: 'Too many requests. Call the office and a person will answer.' },
      { status: 429, headers: { 'Retry-After': String(WINDOW_MS / 1000) } },
    );
  }

  // Reject oversized bodies before parsing them.
  const length = Number(request.headers.get('content-length') ?? 0);
  if (length > 64_000) {
    return NextResponse.json({ error: 'Payload too large.' }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid payload.' }, { status: 400 });
  }

  const parsed = scopeRequestSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Some fields need attention.',
        issues: parsed.error.issues.map((i) => ({
          field: i.path.join('.'),
          message: i.message,
        })),
      },
      { status: 422 },
    );
  }

  // Silently accept anything that trips the honeypot.
  if (parsed.data._hp) {
    return NextResponse.json({ ok: true });
  }

  // Production: dispatch to the scope queue and the CRM here. Log the shape of
  // the request, never the contact details in it.
  console.info('[scope-request] received', {
    project: parsed.data.projectName,
    services: parsed.data.services,
    stage: parsed.data.stage,
    contractHolder: parsed.data.contractHolder,
  });

  return NextResponse.json({ ok: true });
}
