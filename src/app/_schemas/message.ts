import * as z from 'zod';

const messageSchema = z.object({
  message: z.string().min(1),
});

export default messageSchema;

