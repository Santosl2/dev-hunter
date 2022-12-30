import { createContext } from "react";

import { LocalStorageSteps } from "@/shared/interfaces";

type MultiStepContextProps = {
  currentStep: number;
  steps: number;
  storage: LocalStorageSteps;

  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  setSteps: (steps: number) => void;
  validateStepAndInsertStore: (data: any) => boolean;
  reset: () => void;
};

export const MultiStepContext = createContext<MultiStepContextProps>(
  {} as MultiStepContextProps
);
