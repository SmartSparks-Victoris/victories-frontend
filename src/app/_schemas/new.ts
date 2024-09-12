import * as z from 'zod';

const newSchema = z.object({
  fname: z.string().min(1),
  lname: z.string().min(1),
  email: z.string().email(),
  username: z.string().min(1),
  password: z.string().min(1),
});

export default newSchema;

