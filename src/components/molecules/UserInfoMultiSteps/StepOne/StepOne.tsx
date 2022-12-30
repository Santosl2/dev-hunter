/* eslint-disable no-use-before-define */

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

import { Button, Select } from "@/components/atoms";
import { SENIORITIES } from "@/shared/constants/seniorities";
import { SKILLS } from "@/shared/constants/skills";
import { useMultiStep } from "@/shared/hooks";
import { baseAnimationVariant } from "@/shared/variants";

import { useStepOne } from "./hooks";

const options = SKILLS.map((cat) => {
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
  const { validateStepAndInsertStore, nextStep } = useMultiStep();
  const { seniority, setSeniority, setSkills, skills, isDisabled } =
    useStepOne();

  const { data } = useSession();
  const user = data?.user;

  const formData = {
    skills: skills?.value,
    seniority: Number(seniority?.value),
  };

  const handleSubmit = () => {
    if (validateStepAndInsertStore(formData)) {
      nextStep();
    }
  };

  if (!user) return null;

  return (
    <motion.div
      className="flex flex-col w-full gap-5 text-gray-600"
      initial="initial"
      animate="animate"
      variants={baseAnimationVariant}
    >
      <div>
        <p className="mb-2">Quais são suas Skills, {user.name} ?</p>

        <Select
          options={options}
          isMulti
          onChange={setSkills}
          defaultValue={skills?.defaultValue}
        />
      </div>

      <div>
        <p className="mb-2">E a sua senioridade ?</p>

        <Select
          options={optionsSeniority}
          placeholder="Eu sou..."
          onChange={setSeniority}
          defaultValue={seniority?.defaultValue}
        />
      </div>
      <hr />
      <Button
        onClick={handleSubmit}
        $variant="green"
        disabled={isDisabled as boolean}
      >
        Continuar
      </Button>
    </motion.div>
  );
}
