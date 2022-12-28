import { useCallback, useMemo, useState } from "react";

import { MULTI_STEP_STORAGE_KEY } from "@/shared/constants/storage";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";

import { MultiStepContext } from "./Context";

export function MultiStepProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState(0);

  const [value, setLocalStorageValue] = useLocalStorage(
    MULTI_STEP_STORAGE_KEY,
    {}
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

  const getUserCurrentStep = useCallback(() => {
    if (!value) return;

    const usersSteps = Object.keys(value).length;

    const stepsArr = Object.entries(value).map(([key, stepData]) =>
      Object.values(stepData as any)
    );

    const hasUndefinedValues = stepsArr.some((step) => !step);

    if (usersSteps > 0 && hasUndefinedValues) {
      reset();
      return;
    }

    setCurrentStep(usersSteps);
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
    }),
    [currentStep, nextStep, prevStep, reset, steps, setCurrentStepMemoized]
  );

  return (
    <MultiStepContext.Provider value={values}>
      {children}
    </MultiStepContext.Provider>
  );
}
