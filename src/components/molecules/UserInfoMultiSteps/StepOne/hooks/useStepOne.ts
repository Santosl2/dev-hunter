import { useCallback, useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { SENIORITIES } from "@/shared/constants/seniorities";
import { SKILLS } from "@/shared/constants/skills";
import { useMultiStep } from "@/shared/hooks";
import { StepOneProps } from "@/shared/interfaces/multi-step";
import { userInfoMultiStepSchemaStepOne } from "@/shared/schemas/UserInfoMultiStep.schema";

export function useStepOne() {
  const { storage, insertStepStorage, nextStep } = useMultiStep();

  const {
    control,
    setValue,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<StepOneProps>({
    defaultValues: {
      skills: [],
      seniority: undefined,
    },

    resolver: zodResolver(userInfoMultiStepSchemaStepOne),
  });

  useEffect(() => {
    const skills = storage.stepOne?.skills || [];
    const seniority = storage.stepOne?.seniority || 0;

    if (skills.length) setValue("skills", skills);
    if (seniority) setValue("seniority", Number(seniority));
  }, [storage?.stepOne]);

  const onSubmit: SubmitHandler<StepOneProps> = useCallback(
    (formData) => {
      insertStepStorage(formData);
      nextStep();
    },
    [insertStepStorage, nextStep]
  );

  const defaultValuesSkills = useMemo(() => {
    const skills = storage?.stepOne?.skills.map((id: string) => ({
      value: id,
      label: SKILLS.find((skill) => skill.id === Number(id))?.title,
    }));

    return skills;
  }, [storage?.stepOne]);

  const defaultValuesSeniority = useMemo(() => {
    if (!storage?.stepOne?.seniority) return undefined;
    const defaultValue = SENIORITIES.find(
      (e) => e.id === storage?.stepOne?.seniority
    );

    return {
      value: defaultValue?.id.toString(),
      label: defaultValue?.title,
    };
  }, [storage?.stepOne]);

  return {
    control,
    isValid,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    defaultValuesSkills,
    defaultValuesSeniority,
  };
}
