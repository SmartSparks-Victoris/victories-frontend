import * as z from 'zod';

import {
  communicate,
  employees,
  industry,
  plan,
  size,
  solution,
} from '../_dropdowns/join';

const joinSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  industry: z.enum(industry, { message: 'Invalid industry selection' }),
  size: z.enum(size, { message: 'Invalid size selection' }),
  communicate: z.enum(communicate, { message: 'Invalid communication method' }),
  solution: z.enum(solution, { message: 'Invalid solution selection' }),
  employees: z.enum(employees, { message: 'Invalid number of employees' }),
  plan: z.enum(plan, { message: 'Invalid plan selection' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
});

export default joinSchema;

