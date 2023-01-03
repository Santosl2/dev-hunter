import * as z from "zod";

import { SKILLS_IDS } from "@/shared/constants/skills";

export const categorySchema = z.object({
  query: z.object({
    category: z
      .string({
        required_error: "Categoria é obrigatória",
      })
      .refine((value) => SKILLS_IDS.includes(value), {
        message: "Categoria inválida",
      }),
  }),
});
