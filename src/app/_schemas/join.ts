import * as z from 'zod';

import {
  communicate,
  customers,
  industry,
  people,
  plan,
  size,
  solution,
} from '../_dropdowns/join';

const joinSchema = z.object({
  name: z.string().min(1),
  industry: z.enum(industry),
  size: z.enum(size),
  communicate: z.enum(communicate),
  solution: z.enum(solution),
  customers: z.enum(customers),
  plan: z.enum(plan),
  people: z.enum(people),
  email: z.string().email(),
  phone: z.string().min(1),
});

export default joinSchema;

