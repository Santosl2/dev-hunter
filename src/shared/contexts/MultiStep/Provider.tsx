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

  const validateStepAndGoNext = useCallback(
    async (data: any) => {
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

      try {
        userInfoMultiStepSchema.parse(newStorageData);

        setStorage(newStorageData);

        nextStep();
      } catch (e) {
        console.log(e);
      }
    },
    [currentStep, nextStep, setStorage, storage]
  );

  const getUserCurrentStep = useCallback(() => {
    const keys = Object.keys(storage);

    console.log(storage);

    setCurrentStep(keys.length + 1);
  }, [storage]);

  useEffect(() => {
    getUserCurrentStep();
  }, []);

  const values = useMemo(
    () => ({
      currentStep,
      steps,
      setCurrentStep: setCurrentStepMemoized,
      nextStep,
      prevStep,
      setSteps,
      reset,
      validateStepAndGoNext,
    }),
    [
      currentStep,
      nextStep,
      prevStep,
      reset,
      steps,
      setCurrentStepMemoized,
      validateStepAndGoNext,
    ]
  );

  return (
    <MultiStepContext.Provider value={values}>
      {children}
    </MultiStepContext.Provider>
  );
}
