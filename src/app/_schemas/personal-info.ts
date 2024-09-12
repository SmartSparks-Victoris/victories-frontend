import * as z from 'zod';

const personalInfoSchema = z.object({
  fname: z.string().min(1),
  lname: z.string().min(1),
  email: z.string().email(),
});

export default personalInfoSchema;

