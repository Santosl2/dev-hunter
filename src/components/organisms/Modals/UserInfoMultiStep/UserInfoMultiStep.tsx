/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Suspense } from "react";

import { Modal as ModalFlowbite } from "flowbite-react";
import { AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

import { ModalEnumTypes } from "@/shared/constants/enums";
import { useModals, useMultiStep } from "@/shared/hooks";

const dynamicSteps = {
  1: dynamic<any>(
    () =>
      import("../../../molecules/UserInfoMultiSteps/StepOne/StepOne").then(
        (mod) => mod.StepOne
      ),
    { ssr: false }
  ),
  2: dynamic<any>(
    () =>
      import("../../../molecules/UserInfoMultiSteps/StepTwo/StepTwo").then(
        (mod) => mod.StepTwo
      ),
    { ssr: false }
  ),
  3: dynamic<any>(
    () =>
      import("../../../molecules/UserInfoMultiSteps/StepThree/StepThree").then(
        (mod) => mod.StepThree
      ),
    { ssr: false }
  ),
};

export function UserInfoMultiStep() {
  const { actualModal, closeModal } = useModals();
  const { currentStep } = useMultiStep();
  const { data } = useSession();
  const user = data?.user;

  console.log(user);

  const canRenderModal =
    user?.name && actualModal.modalType === ModalEnumTypes.USER_INFO_MULTI_STEP;

  if (!canRenderModal) return null;

  const Component =
    dynamicSteps[currentStep as keyof typeof dynamicSteps] ?? dynamicSteps[1];

  return (
    <ModalFlowbite
      show
      onClose={closeModal}
      popup
      size="xl"
      data-testid="user-info-multi-step"
    >
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
