import { createContext } from "react";

type MultiStepContextProps = {
  currentStep: number;
  steps: number;

  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  setSteps: (steps: number) => void;
  reset: () => void;
};

export const MultiStepContext = createContext<MultiStepContextProps>(
  {} as MultiStepContextProps
);
