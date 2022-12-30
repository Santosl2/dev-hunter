import { useSession } from "next-auth/react";

import { Button } from "@/components/atoms";
import { ModalEnumTypes } from "@/shared/constants/enums";
import { useUserInfo, useModals } from "@/shared/hooks";

export function MissingData() {
  const { openModal } = useModals();
  const { data } = useUserInfo();
  const { data: userData } = useSession();

  const rows = data?.data;

  const isComplete =
    rows && rows.seniority && rows.skills && rows.github && rows.linkedin;

  if (isComplete || !userData?.user) return null;

  return (
    <div
      className="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg fixed right-5 bottom-2 max-w-md"
      role="alert"
      data-testid="missing-data"
    >
      <span className="font-medium">Hey dev!</span> Detectamos que sua conta não
      está completa. Por favor, preencha os dados faltantes para que seu perfil
      fique disponível para recrutadores.
      <div className="mt-3">
        <Button
          $size="sm"
          $variant="yellow"
          onClick={() => {
            openModal(ModalEnumTypes.USER_INFO_MULTI_STEP);
          }}
        >
          Finalizar registro
        </Button>
      </div>
    </div>
  );
}
