import { z } from 'zod';

/** Shared between the client form and the route handler. */
export const scopeRequestSchema = z.object({
  projectName: z.string().min(2, 'Tell us what the project is called.'),
  buildingType: z.string().min(1, 'Select a building type.'),
  squareFeet: z.string().min(1, 'An estimate is fine.'),
  location: z.string().min(2, 'City and state is enough.'),
  stage: z.string().min(1, 'Select a project stage.'),

  services: z.array(z.string()).min(1, 'Select at least one service.'),
  systems: z.array(z.string()).optional().default([]),
  terminals: z.string().optional().default(''),

  contractHolder: z.string().min(1, 'Select who would hold the contract.'),
  schedule: z.string().min(1, 'Select a timeline.'),
  specSection: z.string().optional().default(''),

  name: z.string().min(2, 'Your name, please.'),
  company: z.string().min(2, 'Your company.'),
  role: z.string().optional().default(''),
  email: z.string().email('Enter a valid email address.'),
  phone: z.string().min(7, 'A number we can reach you on.'),
  message: z.string().optional().default(''),

  /** Honeypot. Bots fill hidden fields; people do not. */
  _hp: z.string().optional().default(''),
});

export type ScopeRequest = z.infer<typeof scopeRequestSchema>;
