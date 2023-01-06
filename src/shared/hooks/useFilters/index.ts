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
      removeContract: (mobility: string) => {
        dispatch(removeMobility(mobility));
      },
      removeMobility: (mobility: string) => {
        dispatch(removeMobility(mobility));
      },
      removeCategory: (id: number) => {
        dispatch(removeCategory(id));
      },
      removeSeniority: (id: number) => {
        dispatch(removeSeniority(id));
      },
    }),
    [dispatch]
  );

  return {
    ...actions,
    filters,
  };
}
