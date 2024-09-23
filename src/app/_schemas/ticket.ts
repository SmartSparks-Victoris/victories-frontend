import * as z from 'zod';

const ticketUpdateSchema = z.object({
  Category: z.string(),
  State: z.string(),
  Summary: z.string(),
  Title: z.string(),
});

export default ticketUpdateSchema;

