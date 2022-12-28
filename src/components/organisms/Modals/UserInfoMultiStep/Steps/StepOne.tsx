import { useCallback, useState } from "react";

import { useSession } from "next-auth/react";

import { Button, Select } from "@/components/atoms";
import { CATEGORIES } from "@/shared/constants/categories";
import { SENIORITIES } from "@/shared/constants/seniorities";
import { MULTI_STEP_STORAGE_KEY } from "@/shared/constants/storage";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { useMultiStep } from "@/shared/hooks/useMultiStep";
import { userInfoMultiStepSchema } from "@/shared/schemas/UserInfoMultiStep.schema";

const options = CATEGORIES.map((cat) => {
  return {
    value: cat.id.toString(),
    label: cat.title,
  };
});

const optionsSeniority = SENIORITIES.map((sen) => {
  return {
    value: sen.id.toString(),
    label: sen.title,
  };
});

export function StepOne() {
  const [skills, setSkills] = useState(undefined);
  const [seniority, setSeniority] = useState(0);

  const { nextStep } = useMultiStep();
  const [storage, setStorage] = useLocalStorage(MULTI_STEP_STORAGE_KEY, {});

  const { data } = useSession();
  const user = data?.user;

  const setUserSkills = useCallback((newSkills: any) => {
    const formattedSkills = newSkills.map((skill: any) => {
      return skill.value;
    });

    setSkills(formattedSkills);
  }, []);

  const setUserSeniority = useCallback((newSeniority: any) => {
    setSeniority(Number(newSeniority.value));
  }, []);

  const validateStepAndGoNext = () => {
    try {
      userInfoMultiStepSchema.parse({
        stepOne: {
          skills,
          seniority,
        },
      });

      setStorage({
        ...storage,
        stepOne: {
          skills,
          seniority,
        },
      });

      nextStep();
    } catch (e) {
      console.log(e);
    }
  };

  if (!user) return null;

  return (
    <div className="text-gray-600">
      <small className="mb-3 font-semibold font-poppins">Etapa 1 de 3</small>
      <div className="flex flex-col w-full gap-5 text-gray-600">
        <div>
          <p className="mb-2">Quais são suas Skills, {user.name} ?</p>

          <Select options={options} isMulti onChange={setUserSkills} />
        </div>

        <div>
          <p className="mb-2">E a sua senioridade ?</p>

          <Select
            options={optionsSeniority}
            placeholder="Eu sou..."
            onChange={setUserSeniority}
          />
        </div>
        <hr />
        <Button onClick={validateStepAndGoNext}>Continuar</Button>
      </div>
    </div>
  );
}
