'use client';

import { useState, type FormEvent } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ease } from '@/lib/motion';
import { company } from '@/content/company';
import { scopeRequestSchema } from '@/lib/scope-request';

type Values = Record<string, string | string[]>;

interface Field {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'checkbox' | 'textarea';
  required?: boolean;
  placeholder?: string;
  help?: string;
  options?: string[];
  autoComplete?: string;
  inputMode?: 'text' | 'numeric' | 'tel' | 'email';
  spellCheck?: boolean;
}

const steps: { title: string; fields: Field[] }[] = [
  {
    title: 'The project',
    fields: [
      { name: 'projectName', label: 'Project name', type: 'text', required: true },
      {
        name: 'buildingType',
        label: 'Building type',
        type: 'select',
        required: true,
        options: [
          'Healthcare',
          'Laboratory / research',
          'Higher education',
          'K-12',
          'Office',
          'Data center',
          'Industrial',
          'Civic / government',
          'Other',
        ],
      },
      {
        name: 'squareFeet',
        label: 'Approximate area',
        type: 'text',
        required: true,
        placeholder: 'e.g. 120,000 sq ft…',
        help: 'An estimate is fine.',
        inputMode: 'text',
      },
      {
        name: 'location',
        label: 'Location',
        type: 'text',
        required: true,
        placeholder: 'e.g. Boulder, CO…',
        autoComplete: 'address-level2',
      },
      {
        name: 'stage',
        label: 'Project stage',
        type: 'select',
        required: true,
        options: [
          'Pre-design / programming',
          'Schematic design',
          'Design development',
          'Construction documents',
          'Under construction',
          'Occupied / existing building',
        ],
      },
    ],
  },
  {
    title: 'The scope',
    fields: [
      {
        name: 'services',
        label: 'Services needed',
        type: 'checkbox',
        required: true,
        options: [
          'Air balancing (TAB)',
          'Hydronic balancing',
          'Commissioning (new construction)',
          'Retro-commissioning',
          'Cleanroom certification',
          'Sound & vibration',
          'Fume hood testing',
          'Verification of another agency’s report',
          'Not sure yet',
        ],
      },
      {
        name: 'systems',
        label: 'Systems involved',
        type: 'checkbox',
        options: [
          'VAV air handling',
          'Constant volume',
          'Chilled water',
          'Hot water / steam',
          'Lab exhaust',
          'Isolation / pressure rooms',
          'Cleanroom',
          'Emergency power',
        ],
      },
      {
        name: 'terminals',
        label: 'Approximate terminal count, if known',
        type: 'text',
        placeholder: 'Diffusers, VAV boxes, coils',
        help: 'Not required. It changes the fee more than square footage does.',
      },
    ],
  },
  {
    title: 'Contracting',
    fields: [
      {
        name: 'contractHolder',
        label: 'Who would hold our contract?',
        type: 'select',
        required: true,
        options: [
          'Owner / owner’s representative',
          'General contractor / CM',
          'Design team',
          'Mechanical contractor',
          'Not decided',
        ],
        help: 'We take scope from owners, CMs, and design teams. We do not subcontract to the mechanical contractor whose work we are testing.',
      },
      {
        name: 'schedule',
        label: 'When would field work start?',
        type: 'select',
        required: true,
        options: [
          'Within 30 days',
          'This quarter',
          'Next quarter',
          'Later this year',
          'Budgeting / planning only',
        ],
      },
      {
        name: 'specSection',
        label: 'Specification section, if one exists',
        type: 'text',
        placeholder: '23 05 93, 01 91 13, or attach later',
      },
    ],
  },
  {
    title: 'You',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'company', label: 'Company', type: 'text', required: true, autoComplete: 'organization' },
      { name: 'role', label: 'Role', type: 'text', autoComplete: 'organization-title' },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        autoComplete: 'email',
        inputMode: 'email',
        spellCheck: false,
      },
      {
        name: 'phone',
        label: 'Phone',
        type: 'tel',
        required: true,
        autoComplete: 'tel',
        inputMode: 'tel',
        spellCheck: false,
      },
      { name: 'message', label: 'Anything else we should know', type: 'textarea' },
    ],
  },
];

const fieldBase =
  'w-full rounded-sm border bg-paper-raised px-4 text-base text-ink-900 placeholder:text-ink-500 transition-colors focus:border-signal-pass focus:outline-none focus:ring-[3px] focus:ring-signal-pass/20';

export default function ScopeRequestForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const reduced = useReducedMotion();

  const current = steps[step];
  const isLast = step === steps.length - 1;

  const set = (name: string, value: string | string[]) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[name];
      return next;
    });
  };

  const validateField = (field: Field) => {
    const value = values[field.name];
    let message = '';
    if (field.required && (!value || (Array.isArray(value) && value.length === 0))) {
      message = 'This field is required.';
    } else if (
      field.type === 'email' &&
      typeof value === 'string' &&
      value &&
      !/^\S+@\S+\.\S+$/.test(value)
    ) {
      message = 'Enter a valid email address.';
    }
    if (message) setErrors((e) => ({ ...e, [field.name]: message }));
    return !message;
  };

  /** Move focus to the first field that failed, so the error is not just visual. */
  const focusFirstError = (fieldErrors: Record<string, string>) => {
    const first = current.fields.find((f) => fieldErrors[f.name]);
    if (!first) return;
    const el = document.getElementById(`field-${first.name}`);
    if (el) el.focus();
    else document.getElementById(`field-${first.name}-label`)?.scrollIntoView({ block: 'center' });
  };

  /** Validate only the fields on this step, using the shared schema's rules. */
  const validate = () => {
    const next: Record<string, string> = {};
    for (const field of current.fields) {
      if (!field.required) continue;
      const value = values[field.name];
      if (!value || (Array.isArray(value) && value.length === 0)) {
        next[field.name] = 'This field is required.';
        continue;
      }
      if (field.type === 'email' && typeof value === 'string' && !/^\S+@\S+\.\S+$/.test(value)) {
        next[field.name] = 'Enter a valid email address.';
      }
    }
    setErrors(next);
    if (Object.keys(next).length > 0) {
      focusFirstError(next);
      return false;
    }
    return true;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!isLast) {
      setStep((s) => s + 1);
      return;
    }

    const parsed = scopeRequestSchema.safeParse({
      services: [],
      systems: [],
      ...values,
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      // Send the user back to the first step that has a problem.
      const bad = steps.findIndex((s) => s.fields.some((f) => next[f.name]));
      if (bad >= 0) setStep(bad);
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/scope-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="panel p-10 shadow-panel">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-signal-pass text-paper">
          <Check className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="mt-6 text-2xl">Scope request received.</h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-600">
          An engineer reads this, not a salesperson. You will hear back within one business day,
          either with questions about the scope or with a fixed fee against a written scope matrix.
          If we are not the right agency for it, we will tell you that instead and say who is.
        </p>
        <p className="mt-6 text-sm text-ink-500">
          Anything urgent:{' '}
          <a href={company.phone.mainHref} className="tabular font-mono text-signal-pass-ink">
            {company.phone.main}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="panel p-8 shadow-panel md:p-10">
      {/* progress */}
      <div className="flex items-center gap-3">
        {steps.map((s, i) => (
          <div key={s.title} className="flex flex-1 flex-col gap-2">
            <div className="h-[3px] w-full overflow-hidden bg-ink-100">
              <m.div
                className="h-full bg-signal-pass"
                initial={false}
                animate={{ scaleX: i <= step ? 1 : 0 }}
                style={{ originX: 0 }}
                transition={{ duration: 0.32, ease: ease.settle }}
              />
            </div>
            <span
              className={cn(
                'hidden font-mono text-[10px] uppercase tracking-[0.12em] sm:block',
                i === step ? 'text-signal-pass-ink' : 'text-ink-500',
              )}
            >
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <p className="label-mono mt-8">
        Step {step + 1} of {steps.length}
      </p>
      <h3 className="mt-2 text-2xl">{current.title}</h3>

      <AnimatePresence mode="wait">
        <m.div
          key={step}
          initial={reduced ? false : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduced ? undefined : { opacity: 0, x: -16 }}
          transition={{ duration: 0.26, ease: ease.settle }}
          className="mt-8 space-y-6"
        >
          {current.fields.map((field) => {
            const id = `field-${field.name}`;
            const error = errors[field.name];
            const describedBy = [error ? `${id}-error` : null, field.help ? `${id}-help` : null]
              .filter(Boolean)
              .join(' ');

            // A checkbox group has no single control to point a label at, so it
            // is labelled as a group instead of with a dangling htmlFor.
            const isGroup = field.type === 'checkbox';

            return (
              <div
                key={field.name}
                {...(isGroup ? { role: 'group', 'aria-labelledby': `${id}-label` } : {})}
              >
                {isGroup ? (
                  <p id={`${id}-label`} className="block text-sm text-ink-700">
                    {field.label}
                    {field.required && <span className="ml-1 text-signal-pass-ink">*</span>}
                  </p>
                ) : (
                  <label htmlFor={id} className="block text-sm text-ink-700">
                    {field.label}
                    {field.required && <span className="ml-1 text-signal-pass-ink">*</span>}
                  </label>
                )}

                {field.help && (
                  <p id={`${id}-help`} className="mt-1 text-xs leading-relaxed text-ink-500">
                    {field.help}
                  </p>
                )}

                {field.type === 'select' && (
                  <select
                    id={id}
                    name={field.name}
                    value={(values[field.name] as string) ?? ''}
                    onChange={(e) => set(field.name, e.target.value)}
                    aria-invalid={!!error}
                    aria-describedby={describedBy || undefined}
                    className={cn(fieldBase, 'mt-2 h-12', error ? 'border-signal-deficiency' : 'border-ink-400')}
                  >
                    <option value="">Select…</option>
                    {field.options?.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                )}

                {field.type === 'checkbox' && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {field.options?.map((o) => {
                      const selected = ((values[field.name] as string[]) ?? []).includes(o);
                      return (
                        <button
                          key={o}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => {
                            const list = (values[field.name] as string[]) ?? [];
                            set(field.name, selected ? list.filter((x) => x !== o) : [...list, o]);
                          }}
                          className={cn(
                            'inline-flex min-h-11 touch-manipulation items-center rounded-sm border px-3 text-sm transition-colors',
                            selected
                              ? 'border-signal-pass bg-signal-pass-wash text-signal-pass-ink'
                              : 'border-ink-200 text-ink-600 hover:border-ink-400 hover:text-ink-900',
                          )}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                )}

                {field.type === 'textarea' && (
                  <textarea
                    id={id}
                    name={field.name}
                    rows={4}
                    value={(values[field.name] as string) ?? ''}
                    onChange={(e) => set(field.name, e.target.value)}
                    aria-invalid={!!error}
                    aria-describedby={describedBy || undefined}
                    className={cn(fieldBase, 'mt-2 py-3', error ? 'border-signal-deficiency' : 'border-ink-400')}
                  />
                )}

                {['text', 'email', 'tel'].includes(field.type) && (
                  <input
                    id={id}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    inputMode={field.inputMode}
                    spellCheck={field.spellCheck}
                    value={(values[field.name] as string) ?? ''}
                    onChange={(e) => set(field.name, e.target.value)}
                    onBlur={() => field.required && validateField(field)}
                    aria-invalid={!!error}
                    aria-describedby={describedBy || undefined}
                    className={cn(fieldBase, 'mt-2 h-12', error ? 'border-signal-deficiency' : 'border-ink-400')}
                  />
                )}

                {error && (
                  <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-signal-deficiency-ink">
                    {error}
                  </p>
                )}
              </div>
            );
          })}
        </m.div>
      </AnimatePresence>

      {/* honeypot */}
      <div className="hidden" aria-hidden>
        <label htmlFor="field-company-website">Company website</label>
        <input
          id="field-company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={(values._hp as string) ?? ''}
          onChange={(e) => set('_hp', e.target.value)}
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-6 text-sm text-signal-deficiency-ink">
          Something went wrong sending that. Try again, or call {company.phone.main}. A person
          answers.
        </p>
      )}

      <div className="mt-10 flex items-center justify-between gap-4">
        {step > 0 ? (
          <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back
          </Button>
        ) : (
          <span />
        )}

        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : isLast ? 'Send scope request' : 'Continue'}
          {status !== 'sending' && <ArrowRight className="h-4 w-4" aria-hidden />}
        </Button>
      </div>
    </form>
  );
}
