/* eslint-disable no-use-before-define */

import { Controller } from "react-hook-form";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

import { Button, ErrorMessage, Select } from "@/components/atoms";
import { SENIORITIES } from "@/shared/constants/seniorities";
import { SKILLS } from "@/shared/constants/skills";
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
  const {
    defaultValuesSeniority,
    defaultValuesSkills,
    onSubmit,
    control,
    handleSubmit,
    errors,
  } = useStepOne();

  const { data } = useSession();
  const user = data?.user;

  return (
    <motion.form
      className="flex flex-col w-full gap-5 text-gray-600"
      initial="initial"
      animate="animate"
      variants={baseAnimationVariant}
      data-testid="step-one"
      onSubmit={handleSubmit}
    >
      <div>
        <p className="mb-2">Quais são suas Skills, {user?.name} ?</p>

        <Controller
          name="skills"
          control={control}
          render={({ field }) => (
            <Select
              options={options}
              isMulti
              {...field}
              defaultValue={defaultValuesSkills}
              onChange={(e) => {
                const formattedSkills = e.map((skill: any) => {
                  return skill.value;
                });

                field.onChange(formattedSkills);
              }}
            />
          )}
        />
        {errors.skills?.message && (
          <ErrorMessage message={errors.skills.message} />
        )}
      </div>

      <div>
        <p className="mb-2">E a sua senioridade ?</p>

        <Controller
          name="seniority"
          control={control}
          render={({ field }) => (
            <Select
              options={optionsSeniority}
              placeholder="Eu sou..."
              {...field}
              defaultValue={{ ...defaultValuesSeniority }}
              onChange={(e) => field.onChange(Number(e.value))}
            />
          )}
        />
        {errors.seniority?.message && (
          <ErrorMessage message={errors.seniority.message} />
        )}
      </div>
      <hr />
      <Button $variant="green" type="submit">
        Continuar
      </Button>
    </motion.form>
  );
}
