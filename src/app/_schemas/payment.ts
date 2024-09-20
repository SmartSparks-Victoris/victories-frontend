import * as z from 'zod';

const paymentSchema = z.object({
  name: z.string().min(1),
  number: z.string().min(1),
  expiry: z.string().min(1),
  cvc: z.string().min(1),
  saveCard: z.boolean().optional(),
});

export default paymentSchema;

