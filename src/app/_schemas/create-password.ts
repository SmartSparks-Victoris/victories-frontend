import * as z from 'zod';

const createPasswordSchema = z
  .object({
    newPassword: z.string().min(1, 'Password is required'), // Ensure the password is not empty
    confirm: z.string().min(1, 'Confirmation is required'), // Ensure the confirmation is not empty
  })
  .refine((data) => data.newPassword === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'], // This will point to the confirm field
  });

export default createPasswordSchema;

