import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "@/shared/interfaces";
import {
  addSkill,
  addSeniority,
  removeCategory,
  removeSeniority,
} from "@/shared/store/modules/filters";

export function useFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state: AppState) => state.filters);

  const actions = useMemo(
    () => ({
      addSkill: (title: string) => {
        dispatch(addSkill(title));
      },
      addSeniority: (title: string) => {
        dispatch(addSeniority(title));
      },
      removeCategory: (title: string) => {
        dispatch(removeCategory(title));
      },
      removeSeniority: (title: string) => {
        dispatch(removeSeniority(title));
      },
    }),
    [dispatch]
  );

  return {
    ...actions,
    filters,
  };
}
