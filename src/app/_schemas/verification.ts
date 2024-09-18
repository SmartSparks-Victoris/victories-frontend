import * as z from 'zod';

const verificationSchema = z.object({
  n1: z.string().min(1, { message: '*' }).max(1, { message: '*' }),
  n2: z.string().min(1, { message: '*' }).max(1, { message: '*' }),
  n3: z.string().min(1, { message: '*' }).max(1, { message: '*' }),
  n4: z.string().min(1, { message: '*' }).max(1, { message: '*' }),
  n5: z.string().min(1, { message: '*' }).max(1, { message: '*' }),
  n6: z.string().min(1, { message: '*' }).max(1, { message: '*' }),
});

export default verificationSchema;

