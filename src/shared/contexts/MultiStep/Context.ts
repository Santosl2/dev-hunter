import { createContext } from "react";

import { LocalStorageSteps } from "@/shared/interfaces/multi-step";

type MultiStepContextProps = {
  currentStep: number;

  storage: LocalStorageSteps;

  nextStep: () => void;
  prevStep: () => void;

  insertStepStorage: (data: any) => void;
  reset: () => void;
};

export const MultiStepContext = createContext<MultiStepContextProps>(
  {} as MultiStepContextProps
);
