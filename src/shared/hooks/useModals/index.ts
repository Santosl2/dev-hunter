import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "@/shared/interfaces";
import { closeModal, openModal } from "@/shared/store/modules/modals";

export function useModals() {
  const dispatch = useDispatch();
  const actualModal = useSelector((state: AppState) => state.modals);

  const values = useMemo(
    () => ({
      openModal: (modal: string) => {
        dispatch(openModal(modal));
      },
      closeModal: () => {
        dispatch(closeModal());
      },
    }),
    [dispatch]
  );

  return {
    ...values,
    actualModal,
  };
}
