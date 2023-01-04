import { useFilters } from "@/shared/hooks";
import { FiltersStateKeys } from "@/shared/interfaces/states";

import { CategoryObjectProps } from "../CategoryItem.types";

export function useCategoryItem(id: number, type: FiltersStateKeys = "skills") {
  const { addSkill, addSeniority, filters, removeCategory, removeSeniority } =
    useFilters();

  const obj: CategoryObjectProps = {
    skills: {
      addRegister: addSkill,
      removeRegister: removeCategory,
      state: filters.skills,
    },
    seniorities: {
      addRegister: addSeniority,
      removeRegister: removeSeniority,
      state: filters.seniorities,
    },
    contractTypes: {
      addRegister: addSeniority,
      removeRegister: removeSeniority,
      state: filters.seniorities,
    },
  };

  const { addRegister, removeRegister, state } = obj[type] ?? obj.skills;

  const isSelected = state === id;

  const handleCategoryClick = () => {
    if (isSelected) {
      removeRegister(id);
      return;
    }

    addRegister(id);
  };

  return {
    handleCategoryClick,
    isSelected,
  };
}
