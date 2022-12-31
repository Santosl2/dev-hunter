import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import { motion } from "framer-motion";

import { Button, Input } from "@/components/atoms";
import { useMutationCreateInfo, useMultiStep } from "@/shared/hooks";
import { CreateUser } from "@/shared/interfaces/user";
import { baseAnimationVariant } from "@/shared/variants";

export function StepThree() {
  const { validateStepAndInsertStore, prevStep, storage } = useMultiStep();

  const [linkedin, setLinkedin] = useState(() => {
    return storage?.stepThree?.linkedin ?? "";
  });

  const [github, setGithub] = useState(() => {
    return storage?.stepThree?.github ?? "";
  });

  const { mutateAsync } = useMutationCreateInfo();

  const formData = {
    linkedin,
    github,
  };

  const isDisabled = !linkedin || !github;

  const handleSubmit = async () => {
    if (validateStepAndInsertStore(formData)) {
      try {
        const stepThreeData = storage.stepThree ?? formData;

        const formattedStorage = {
          ...storage.stepOne,
          ...storage.stepTwo,
          ...stepThreeData,
        };

        await mutateAsync(formattedStorage as CreateUser);
      } catch {
        console.log("error");
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={baseAnimationVariant}
      data-testid="step-three"
    >
      <Input
        type="url"
        placeholder="https://www.linkedin.com/in/"
        icon={<BsLinkedin />}
        onValueChange={(e) => setLinkedin(e)}
      />
      <Input
        type="url"
        placeholder="https://github.com/"
        icon={<BsGithub />}
        onValueChange={(e) => setGithub(e)}
      />

      <div className="flex justify-between items-center">
        <Button $variant="yellow" onClick={() => prevStep()}>
          Voltar
        </Button>
        <Button $variant="green" onClick={handleSubmit} disabled={isDisabled}>
          Finalizar!
        </Button>
      </div>
    </motion.div>
  );
}
