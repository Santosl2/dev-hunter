import { Session } from "next-auth";
import { z } from "zod";

import { ContractsTypes, LocationTypes } from ".";
import { UpdateProfileSchema } from "../schemas/UpdateProfile.schema";
import { apiUserInfoMultiStepSchema } from "../schemas/UserInfoMultiStep.schema";

export type User = {
  _id: string;
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  bio: string;
  seniority?: number;
  skills?: string[];
  linkedin?: string;
  contract_type?: ContractsTypes[];
  mobility_type?: LocationTypes[];
};

export type CreateUser = z.infer<typeof apiUserInfoMultiStepSchema>;
export type UserInfo = Omit<CreateUser, "bio">;

export type UserLocation = {
  country_code: string;
  country_name: string;
  city: string;
  state: string;
};

export type AuthSession = Session & {
  login: string;
};

export type UpdateProfileData = z.infer<typeof UpdateProfileSchema>;
