/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

import { motion } from "framer-motion";

import { Button } from "@/components/atoms";
import { useUserInfo, useMultiStep } from "@/shared/hooks";
import { baseAnimationVariant } from "@/shared/variants";

export function StepTwo() {
  const { data } = useUserInfo();

  const { validateStepAndInsertStore, nextStep, prevStep, storage } =
    useMultiStep();

  const userBio = data?.data.bio;

  const [bio, setBio] = useState(() => {
    return storage?.stepTwo?.bio ?? userBio ?? "";
  });

  const formData = {
    bio,
  };

  const handleSubmit = () => {
    if (validateStepAndInsertStore(formData)) {
      nextStep();
    }
  };

  return (
    <motion.div
      className="flex gap-3 flex-col"
      initial="initial"
      animate="animate"
      variants={baseAnimationVariant}
      data-testid="step-two"
    >
      <div>
        <label className="mb-2" htmlFor="step-two-bio">
          Conte-nos um pouco sobre você
        </label>
        <textarea
          id="step-two-bio"
          defaultValue={bio}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500  resize-none h-36"
          onChange={(e) => {
            setBio(e.target.value);
          }}
        />
      </div>

      <hr />
      <div className="flex justify-between items-center">
        <Button $variant="yellow" onClick={() => prevStep()}>
          Voltar
        </Button>
        <Button $variant="green" onClick={handleSubmit} disabled={!bio}>
          Continuar
        </Button>
      </div>
    </motion.div>
  );
}
