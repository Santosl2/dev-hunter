/* eslint-disable prefer-regex-literals */
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
  stepTwo: z.object({
    bio: z.string({
      required_error: "Preencha o campo",
    }),
  }),
  stepThree: z.object({
    github: z
      .string({
        required_error: "Preencha o campo",
      })
      .refine(
        (value) => {
          const regex = new RegExp(
            "^(https?:\\/\\/)?(www\\.)?github\\.com\\/.+$"
          );
          return regex.test(value);
        },
        {
          message: "Insira um link válido",
        }
      ),

    linkedin: z
      .string({
        required_error: "Preencha o campo",
      })
      .refine((value) => {
        const regex = new RegExp(
          "^(https?:\\/\\/)?(www\\.)?linkedin\\.com\\/in\\/.+$"
        );
        return regex.test(value);
      }),
  }),
});

export const userInfoMultiStepSchemaStepOne =
  userInfoMultiStepSchema.shape.stepOne;

export const apiUserInfoMultiStepSchema = userInfoMultiStepSchemaStepOne
  .extend(userInfoMultiStepSchema.shape.stepTwo.shape)
  .extend(userInfoMultiStepSchema.shape.stepThree.shape);
