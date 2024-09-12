import * as z from 'zod';

const passwordSchema = z.object({
  old: z.string().min(1),
  new: z.string().min(1),
});

export default passwordSchema;

