import { useState, useCallback } from "react";

import { CATEGORIES } from "@/shared/constants/categories";
import { SENIORITIES } from "@/shared/constants/seniorities";
import { MULTI_STEP_STORAGE_KEY } from "@/shared/constants/storage";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { LocalStorageSteps } from "@/shared/interfaces";

import { StateProps } from "../StepOne.types";

export function useStepOne() {
  const { storage } = useLocalStorage<LocalStorageSteps>(
    MULTI_STEP_STORAGE_KEY,
    {} as LocalStorageSteps
  );

  const [skills, setSkills] = useState<StateProps>(() => {
    if (storage?.stepOne?.skills) {
      const defaultValue = storage.stepOne.skills.map((id) => {
        return {
          value: id,
          label: CATEGORIES.find((cat) => cat.id === Number(id))?.title,
        };
      });

      return {
        defaultValue,
        value: storage.stepOne.skills,
      };
    }

    return null;
  });

  const [seniority, setSeniority] = useState<StateProps>(() => {
    if (storage?.stepOne?.seniority) {
      const defaultValue = SENIORITIES.find(
        (e) => e.id === storage.stepOne.seniority
      );

      return {
        defaultValue: {
          value: defaultValue?.id.toString(),
          label: defaultValue?.title,
        },
        value: storage.stepOne.seniority,
      };
    }

    return null;
  });

  const setUserSkills = useCallback(
    (newSkills: any) => {
      const formattedSkills = newSkills.map((skill: any) => {
        return skill.value;
      });

      setSkills({
        defaultValue: newSkills,
        value: formattedSkills,
      });
    },
    [setSkills]
  );

  const setUserSeniority = useCallback(
    (newSeniority: any) => {
      setSeniority({
        defaultValue: newSeniority,
        value: newSeniority.value,
      });
    },
    [setSeniority]
  );

  return {
    skills,
    seniority,
    setSkills: setUserSkills,
    setSeniority: setUserSeniority,
  };
}
