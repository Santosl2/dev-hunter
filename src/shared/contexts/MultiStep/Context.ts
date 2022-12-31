import { createContext } from "react";

import { LocalStorageSteps } from "@/shared/interfaces";

type MultiStepContextProps = {
  currentStep: number;

  storage: LocalStorageSteps;

  nextStep: () => void;
  prevStep: () => void;

  validateStepAndInsertStore: (data: any) => boolean;
  reset: () => void;
};

export const MultiStepContext = createContext<MultiStepContextProps>(
  {} as MultiStepContextProps
);
