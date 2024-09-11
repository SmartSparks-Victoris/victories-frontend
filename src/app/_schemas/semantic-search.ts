import * as z from 'zod';

const semanticSearchSchema = z.object({
  query: z.string().min(1),
});

export default semanticSearchSchema;

