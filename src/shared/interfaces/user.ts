import { z } from "zod";

import { apiUserInfoMultiStepSchema } from "../schemas/UserInfoMultiStep.schema";

export type User = {
  _id: string;
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  bio: string;
  seniority?: string;
  categories?: string[];
};

export type CreateUser = z.infer<typeof apiUserInfoMultiStepSchema>;
