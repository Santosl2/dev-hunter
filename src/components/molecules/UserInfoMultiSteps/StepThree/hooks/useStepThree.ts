import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { zodResolver } from "@hookform/resolvers/zod";

import { MULTI_STEP_STORAGE_KEY } from "@/shared/constants/storage";
import { useModals, useMultiStep, useMutationCreateInfo } from "@/shared/hooks";
import { StepThreeProps } from "@/shared/interfaces/multi-step";
import { CreateUser } from "@/shared/interfaces/user";
import { userInfoMultiStepSchema } from "@/shared/schemas/UserInfoMultiStep.schema";

export function useStepThree() {
  const { insertStepStorage, prevStep, storage } = useMultiStep();
  const { mutateAsync, isLoading } = useMutationCreateInfo();
  const { closeModal } = useModals();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<StepThreeProps>({
    defaultValues: {
      linkedin: storage?.stepThree?.linkedin ?? undefined,
      contract_type: storage?.stepThree?.contract_type ?? undefined,
      mobility_type: storage?.stepThree?.mobility_type ?? undefined,
    },
    resolver: zodResolver(userInfoMultiStepSchema.shape.stepThree),
  });

  const onSubmit: SubmitHandler<StepThreeProps> = useCallback(
    async (formData) => {
      insertStepStorage(formData);
      try {
        const stepThreeData = storage.stepThree ?? formData;

        const formattedStorage = {
          ...storage.stepOne,
          ...storage.stepTwo,
          ...stepThreeData,
        };

        await mutateAsync(formattedStorage as CreateUser);

        localStorage.removeItem(MULTI_STEP_STORAGE_KEY);
      } catch {
        toast.error(
          "Erro ao inserir seus dados! Tente novamente mais tarde ou entre em contato."
        );
      } finally {
        closeModal();
      }
    },
    [insertStepStorage, mutateAsync, storage]
  );

  return {
    errors,
    isValid,
    handleSubmit: handleSubmit(onSubmit),
    register,
    prevStep,
    control,
    isLoading,
  };
}
