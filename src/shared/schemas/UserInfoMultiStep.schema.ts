/* eslint-disable prefer-regex-literals */
import * as z from "zod";

import { CONTRACT_TYPES, MOBILITY_TYPES } from "../constants";

export const userInfoMultiStepSchema = z.object({
  stepOne: z.object({
    seniority: z
      .number({
        required_error: "Selecione sua senioridade",
      })
      .min(1, "Selecione sua senioridade"),
    skills: z
      .string({
        required_error: "Selecione pelo menos uma habilidade",
      })
      .array()
      .nonempty({
        message: "Selecione pelo menos uma habilidade",
      }),
  }),
  stepTwo: z.object({
    bio: z
      .string({
        required_error: "Conte um pouco sobre você",
      })
      .min(10, {
        message: "Conte um pouco sobre você (mínimo 10 caracteres)",
      }),
  }),
  stepThree: z.object({
    mobility_type: z
      .string({
        required_error:
          "Selecione  o(s) tipo(s) de mobilidade(s) que você deseja",
      })
      .array()
      .refine(
        (value) => {
          const mobilityValues = MOBILITY_TYPES.map((item) => item.value);
          const verifyExistsInArray = mobilityValues.find((item) =>
            value.includes(item)
          );

          return verifyExistsInArray;
        },
        {
          message: "Tipo de mobilidade inválido",
        }
      ),
    contract_type: z
      .string({
        required_error: "Selecione o(s) tipo(s) de contrato(s) que você deseja",
      })
      .array()
      .refine(
        (value) => {
          const contractValues = CONTRACT_TYPES.map((item) => item.value);
          const verifyExistsInArray = contractValues.find((item) =>
            value.includes(item)
          );

          return verifyExistsInArray;
        },
        {
          message: "Tipo de contrato inválido",
        }
      ),
    linkedin: z
      .string({
        required_error: "Preencha o campo",
      })
      .refine(
        (value) => {
          const regex = new RegExp(
            "^(https?:\\/\\/)?(www\\.)?linkedin\\.com\\/in\\/.+$"
          );
          return regex.test(value);
        },
        {
          message: "Insira um link válido",
        }
      ),
  }),
});

export const userInfoMultiStepSchemaStepOne =
  userInfoMultiStepSchema.shape.stepOne;

export const apiUserInfoMultiStepSchema = userInfoMultiStepSchemaStepOne
  .extend(userInfoMultiStepSchema.shape.stepTwo.shape)
  .extend(userInfoMultiStepSchema.shape.stepThree.shape);
