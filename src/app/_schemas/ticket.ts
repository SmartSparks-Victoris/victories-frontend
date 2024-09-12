import * as z from 'zod';

const ticketUpdateSchema = z.object({
  category: z.string(),
  status: z.string(),
  summary: z.string(),
  title: z.string(),
});

export default ticketUpdateSchema;

