import * as z from "zod";

export const userInfoMultiStepSchema = z.object({
  stepOne: z.object({
    seniority: z
      .number({
        required_error: "Selecione uma senioridade",
      })
      .min(0),
    skills: z
      .string({
        required_error: "Selecione ao menos uma habilidade",
      })
      .array()
      .nonempty({
        message: "Selecione ao menos uma habilidade",
      }),
  }),
});

type A = z.infer<typeof userInfoMultiStepSchema>; // string
