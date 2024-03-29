import * as z from "zod";

export const developersSchema = z.object({
  query: z.object({
    skills: z.union([z.string(), z.number()]),
    seniorities: z.union([z.string(), z.number()]),
  }),
});

export const getDeveloperSchema = z.object({
  query: z.object({
    user: z.string(),
  }),
});
