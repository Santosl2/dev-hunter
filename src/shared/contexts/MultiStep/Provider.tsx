import { useCallback, useEffect, useMemo, useState } from "react";

import { MULTI_STEP_STORAGE_KEY } from "@/shared/constants/storage";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { LocalStorageSteps } from "@/shared/interfaces";
import { userInfoMultiStepSchema } from "@/shared/schemas/UserInfoMultiStep.schema";

import { MultiStepContext } from "./Context";

export function MultiStepProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState(0);

  const { storage, setStorage } = useLocalStorage<LocalStorageSteps>(
    MULTI_STEP_STORAGE_KEY,
    {} as LocalStorageSteps
  );

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => prev + 1);
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCurrentStep(1);
  }, []);

  const setCurrentStepMemoized = useCallback(
    (newStep: number) => {
      if (newStep > steps) return;
      setCurrentStep(newStep);
    },
    [steps]
  );

  const validateStepAndInsertStore = useCallback(
    (data: any) => {
      const stepsObj = {
        1: "stepOne",
        2: "stepTwo",
        3: "stepThree",
      };

      const actualStep: string =
        stepsObj[currentStep as keyof typeof stepsObj] ?? "stepOne";

      const newStorageData = {
        ...storage,
        [actualStep]: data,
      };

      const schema =
        userInfoMultiStepSchema.shape[
          actualStep as keyof typeof userInfoMultiStepSchema.shape
        ];

      const parse = schema.safeParse(data);

      if (parse.success) setStorage(newStorageData);

      return parse.success;
    },
    [currentStep, setStorage, storage]
  );

  const getUserCurrentStep = useCallback(() => {
    const keys = Object.keys(storage);

    setCurrentStep(keys.length + 1);
  }, [storage]);

  useEffect(() => {
    getUserCurrentStep();
  }, []);

  const values = useMemo(
    () => ({
      currentStep,
      steps,
      storage,
      setCurrentStep: setCurrentStepMemoized,
      nextStep,
      prevStep,
      setSteps,
      reset,
      validateStepAndInsertStore,
    }),
    [
      currentStep,
      nextStep,
      prevStep,
      reset,
      steps,
      setCurrentStepMemoized,
      validateStepAndInsertStore,
      storage,
    ]
  );

  return (
    <MultiStepContext.Provider value={values}>
      {children}
    </MultiStepContext.Provider>
  );
}
