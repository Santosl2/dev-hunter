import { z } from "zod";

import {
  profileSchema,
  userInfoMultiStepSchema,
} from "./UserInfoMultiStep.schema";

export const UpdateProfileSchema = z.object({
  ...profileSchema,
  ...userInfoMultiStepSchema.shape.stepTwo.shape,
});
