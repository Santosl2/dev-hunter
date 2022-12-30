import { useState, useCallback } from "react";

import { SENIORITIES } from "@/shared/constants/seniorities";
import { SKILLS } from "@/shared/constants/skills";
import { useMultiStep } from "@/shared/hooks";

import { StateProps } from "../StepOne.types";

export function useStepOne() {
  const { storage } = useMultiStep();

  const [skills, setSkills] = useState<StateProps>(() => {
    if (storage?.stepOne?.skills) {
      const defaultValue = storage.stepOne.skills.map((id) => {
        return {
          value: id,
          label: SKILLS.find((cat) => cat.id === Number(id))?.title,
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

  const isDisabled = !skills?.value || !seniority?.value;

  return {
    skills,
    seniority,
    setSkills: setUserSkills,
    setSeniority: setUserSeniority,
    isDisabled,
  };
}
