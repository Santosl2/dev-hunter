import { useDispatch, useSelector } from "react-redux";

import { AppState } from "@/shared/interfaces";
import {
  addCategory,
  addSeniority,
  removeCategory,
  removeSeniority,
} from "@/shared/store/modules/filters";

export function useFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state: AppState) => state.filters);

  const actions = {
    addCategory: (title: string) => {
      dispatch(addCategory(title));
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
  };

  return {
    ...actions,
    filters,
  };
}
