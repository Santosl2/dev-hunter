import { Suspense } from "react";

import { Modal as ModalFlowbite } from "flowbite-react";
import { AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

import { ModalEnumTypes } from "@/shared/constants/enums";
import { useModals } from "@/shared/hooks/useModals";
import { useMultiStep } from "@/shared/hooks/useMultiStep";

const dynamicSteps = {
  1: dynamic(() =>
    import("../../../molecules/UserInfoMultiSteps/StepOne/StepOne").then(
      (mod) => mod.StepOne
    )
  ),
  2: dynamic(() =>
    import("../../../molecules/UserInfoMultiSteps/StepTwo/StepTwo").then(
      (mod) => mod.StepTwo
    )
  ),
  3: dynamic(() =>
    import("../../../molecules/UserInfoMultiSteps/StepThree/StepThree").then(
      (mod) => mod.StepThree
    )
  ),
};

export function UserInfoMultiStep() {
  const { actualModal, closeModal } = useModals();
  const { currentStep } = useMultiStep();
  const { data } = useSession();
  const user = data?.user;

  const canRenderModal =
    user?.name && actualModal.modalType === ModalEnumTypes.USER_INFO_MULTI_STEP;

  if (!canRenderModal) return null;

  const Component =
    dynamicSteps[currentStep as keyof typeof dynamicSteps] ?? dynamicSteps[1];

  return (
    <ModalFlowbite show onClose={closeModal} popup size="xl">
      <ModalFlowbite.Header />
      <ModalFlowbite.Body>
        <div className="text-gray-600">
          <small className="mb-3 font-semibold font-poppins">
            Etapa {currentStep} de 3
          </small>
          <AnimatePresence>
            <Suspense fallback={<>Loading...</>}>
              <Component />
            </Suspense>
          </AnimatePresence>
        </div>
      </ModalFlowbite.Body>
    </ModalFlowbite>
  );
}
