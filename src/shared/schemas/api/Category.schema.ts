import * as z from "zod";

import { CATEGORIES_IDS } from "@/shared/constants/categories";

export const categorySchema = z.object({
  query: z.object({
    category: z
      .string({
        required_error: "Categoria é obrigatória",
      })
      .refine((value) => CATEGORIES_IDS.includes(value), {
        message: "Categoria inválida",
      }),
  }),
});
