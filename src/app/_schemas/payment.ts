import * as z from 'zod';

const paymentSchema = z.object({
  name: z.string().min(1),
  number: z.string().min(1),
  expiry: z.string().email(),
  cvc: z.string().min(1),
});

export default paymentSchema;

