import * as z from 'zod';

import {
  communicate,
  employees,
  plan,
  size,
  solution,
  type,
} from '../_dropdowns/join';

const joinSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  type: z.enum(type, { message: 'Invalid type selection' }),
  size: z.enum(size, { message: 'Invalid size selection' }),
  communicate: z.enum(communicate, { message: 'Invalid communication method' }),
  solution: z.enum(solution, { message: 'Invalid solution selection' }),
  employees: z.enum(employees, { message: 'Invalid number of employees' }),
  plan: z.enum(plan, { message: 'Invalid plan selection' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  address2: z.string().min(1, { message: 'Address2 is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  postal: z.string().min(1, { message: 'Postal is required' }),
  link: z.string().min(1, { message: 'Link is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
  file: z.instanceof(File, { message: 'A valid file is required' }),
});

export default joinSchema;

