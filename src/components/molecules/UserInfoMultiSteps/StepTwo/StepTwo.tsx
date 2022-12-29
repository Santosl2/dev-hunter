/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

import { motion, Variants } from "framer-motion";

import { Button } from "@/components/atoms";
import { MULTI_STEP_STORAGE_KEY } from "@/shared/constants/storage";
import { useUserInfo } from "@/shared/hooks";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { useMultiStep } from "@/shared/hooks/useMultiStep";
import { LocalStorageSteps } from "@/shared/interfaces";

export function StepTwo() {
  const { data } = useUserInfo();

  const { validateStepAndGoNext, prevStep } = useMultiStep();

  const userBio = data?.data.bio;

  const { storage } = useLocalStorage<LocalStorageSteps>(
    MULTI_STEP_STORAGE_KEY,
    {} as LocalStorageSteps
  );

  const [bio, setBio] = useState(() => {
    if (storage?.stepTwo?.bio) {
      return storage?.stepTwo?.bio;
    }

    return userBio ?? "";
  });

  const formData = {
    bio,
  };

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

  return (
    <motion.div
      className="flex gap-3 flex-col"
      initial="initial"
      animate="animate"
      variants={variants}
    >
      <div>
        <label className="mb-2" htmlFor="step-two-bio">
          Conte-nos um pouco sobre você
        </label>
        <textarea
          id="step-two-bio"
          defaultValue={bio}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500  resize-none h-36"
        />
      </div>

      <hr />
      <div className="flex justify-between items-center">
        <Button $variant="yellow" onClick={() => prevStep()}>
          Voltar
        </Button>
        <Button
          $variant="green"
          onClick={() => validateStepAndGoNext(formData)}
        >
          Continuar
        </Button>
      </div>
    </motion.div>
  );
}
