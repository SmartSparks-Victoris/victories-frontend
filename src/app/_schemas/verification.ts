import * as z from 'zod';

const verificationSchema = z.object({
  n1: z.string().min(1).max(1),
  n2: z.string().min(1).max(1),
  n3: z.string().min(1).max(1),
  n4: z.string().min(1).max(1),
  n5: z.string().min(1).max(1),
  n6: z.string().min(1).max(1),
});

export default verificationSchema;

