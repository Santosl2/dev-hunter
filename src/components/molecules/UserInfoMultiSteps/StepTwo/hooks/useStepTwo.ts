import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useMultiStep, useUserInfo } from "@/shared/hooks";
import { StepTwoProps } from "@/shared/interfaces/multi-step";
import { userInfoMultiStepSchema } from "@/shared/schemas/UserInfoMultiStep.schema";

export function useStepTwo() {
  const { data } = useUserInfo();
  const userBio = data?.data.bio;

  const { insertStepStorage, nextStep, prevStep, storage } = useMultiStep();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<StepTwoProps>({
    defaultValues: {
      bio: storage?.stepTwo?.bio ?? userBio ?? undefined,
    },
    resolver: zodResolver(userInfoMultiStepSchema.shape.stepTwo),
  });

  const onSubmit: SubmitHandler<StepTwoProps> = useCallback(
    (formData) => {
      insertStepStorage(formData);
      nextStep();
    },
    [insertStepStorage, nextStep]
  );

  return {
    errors,
    isValid,
    handleSubmit: handleSubmit(onSubmit),
    register,
    prevStep,
  };
}
