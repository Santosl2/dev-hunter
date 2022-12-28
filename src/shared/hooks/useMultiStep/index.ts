import { useContext } from "react";

import { MultiStepContext } from "@/shared/contexts";

export function useMultiStep() {
  const ctx = useContext(MultiStepContext);

  if (!ctx) {
    throw new Error("useMultiStep must be used within a MultiStepProvider");
  }

  return ctx;
}
