/* eslint-disable jsx-a11y/label-has-associated-control */

import { motion } from "framer-motion";

import { Button, ErrorMessage } from "@/components/atoms";
import { baseAnimationVariant } from "@/shared/variants";

import { useStepTwo } from "./hooks";

export function StepTwo() {
  const { handleSubmit, errors, isValid, prevStep, register } = useStepTwo();

  return (
    <motion.form
      className="flex gap-3 flex-col"
      initial="initial"
      animate="animate"
      variants={baseAnimationVariant}
      data-testid="step-two"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="mb-2" htmlFor="step-two-bio">
          Conte-nos um pouco sobre você
        </label>
        <textarea
          id="step-two-bio"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500  resize-none h-36"
          {...register("bio")}
        />
        {errors.bio?.message && <ErrorMessage message={errors.bio.message} />}
      </div>

      <hr />
      <div className="flex justify-between items-center">
        <Button $variant="yellow" onClick={() => prevStep()}>
          Voltar
        </Button>
        <Button $variant="green" type="submit" disabled={!isValid}>
          Continuar
        </Button>
      </div>
    </motion.form>
  );
}
