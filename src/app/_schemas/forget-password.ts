import * as z from 'zod';

const mobileSchema = z.object({
  email: z.string().email(),
  mobile: z.string().min(1),
});

export default mobileSchema;

