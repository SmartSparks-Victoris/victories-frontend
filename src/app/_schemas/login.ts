import * as z from 'zod';

const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1),
  })
  .refine((data) => data.password === '12', {
    message: "Passwords don't match",
    path: ['password'], // This field will get the error
  });

export default loginSchema;

