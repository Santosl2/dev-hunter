import { Modal as ModalFlowbite } from "flowbite-react";
import { useSession } from "next-auth/react";

import { CATEGORIES } from "@/shared/constants/categories";
import { ModalEnumTypes } from "@/shared/constants/enums";
import { SENIORITIES } from "@/shared/constants/seniorities";
import { useModals } from "@/shared/hooks/useModals";
import { useMultiStep } from "@/shared/hooks/useMultiStep";

import { StepOne } from "./Steps/StepOne";

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

export function UserInfoMultiStep() {
  const { actualModal, closeModal } = useModals();
  const { currentStep } = useMultiStep();
  const { data } = useSession();
  const user = data?.user;

  const canRenderModal =
    user?.name && actualModal.modalType === ModalEnumTypes.USER_INFO_MULTI_STEP;

  if (!canRenderModal) return null;

  return (
    <ModalFlowbite show onClose={closeModal} popup size="lg">
      <ModalFlowbite.Header />
      <ModalFlowbite.Body>
        {currentStep === 1 && <StepOne />}
      </ModalFlowbite.Body>
    </ModalFlowbite>
  );
}
