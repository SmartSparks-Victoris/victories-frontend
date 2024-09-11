import * as z from 'zod';

const loginSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(1),
});

export default loginSchema;

