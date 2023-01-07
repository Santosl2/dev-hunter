import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "@/shared/interfaces";
import {
  addSkill,
  addSeniority,
  removeCategory,
  removeSeniority,
  removeMobility,
  addContract,
  addMobility,
  removeContract,
} from "@/shared/store/modules/filters";

export function useFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state: AppState) => state.filters);

  const actions = useMemo(
    () => ({
      addSkill: (id: number) => {
        dispatch(addSkill(id));
      },
      addSeniority: (id: number) => {
        dispatch(addSeniority(id));
      },
      addContract: (contract: string) => {
        dispatch(addContract(contract));
      },
      addMobility: (contract: string) => {
        dispatch(addMobility(contract));
      },
      removeContract: () => {
        dispatch(removeContract());
      },
      removeMobility: () => {
        dispatch(removeMobility());
      },
      removeCategory: () => {
        dispatch(removeCategory());
      },
      removeSeniority: () => {
        dispatch(removeSeniority());
      },
    }),
    [dispatch]
  );

  return {
    ...actions,
    filters,
  };
}
