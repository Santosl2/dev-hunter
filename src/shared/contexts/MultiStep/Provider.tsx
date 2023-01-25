import { useCallback, useEffect, useMemo, useState } from "react";

import { MULTI_STEP_STORAGE_KEY } from "@/shared/constants/storage";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { LocalStorageSteps } from "@/shared/interfaces/multi-step";

import { MultiStepContext } from "./Context";

export function MultiStepProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);

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

  const insertStepStorage = useCallback(
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

      setStorage(newStorageData);
    },
    [currentStep, setStorage, storage]
  );

  const getUserCurrentStep = useCallback(() => {
    const keys = Object.keys(storage);

    setCurrentStep(keys.length || 1);
  }, [storage]);

  useEffect(() => {
    getUserCurrentStep();
  }, []);

  const values = useMemo(
    () => ({
      currentStep,
      storage,

      nextStep,
      prevStep,
      reset,
      insertStepStorage,
    }),
    [currentStep, nextStep, prevStep, reset, insertStepStorage, storage]
  );

  return (
    <MultiStepContext.Provider value={values}>
      {children}
    </MultiStepContext.Provider>
  );
}
