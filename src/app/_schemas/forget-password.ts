import * as z from 'zod';

const mobileSchema = z.object({
  username: z.string().min(1),
  mobile: z.string().min(1),
});

export default mobileSchema;

