/* eslint-disable no-use-before-define */

import { motion, Variants } from "framer-motion";
import { useSession } from "next-auth/react";

import { Button, Select } from "@/components/atoms";
import { CATEGORIES } from "@/shared/constants/categories";
import { SENIORITIES } from "@/shared/constants/seniorities";
import { useMultiStep } from "@/shared/hooks/useMultiStep";

import { useStepOne } from "./hooks";

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

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export function StepOne() {
  const { validateStepAndGoNext } = useMultiStep();
  const { seniority, setSeniority, setSkills, skills } = useStepOne();

  const { data } = useSession();
  const user = data?.user;

  const formData = {
    skills: skills?.value,
    seniority: Number(seniority?.value),
  };

  if (!user) return null;

  return (
    <motion.div
      className="flex flex-col w-full gap-5 text-gray-600"
      initial="initial"
      animate="animate"
      variants={variants}
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
      <Button onClick={() => validateStepAndGoNext(formData)} $variant="green">
        Continuar
      </Button>
    </motion.div>
  );
}
