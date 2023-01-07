import { useFilters } from "@/shared/hooks";
import { FiltersStateKeys } from "@/shared/interfaces/states";

import { CategoryObjectProps } from "../CategoryItem.types";

export function useCategoryItem(
  id: number | string,
  type: FiltersStateKeys = "skills"
) {
  const {
    addSkill,
    addSeniority,
    filters,
    removeCategory,
    removeSeniority,
    ...rest
  } = useFilters();

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
      addRegister: rest.addContract,
      removeRegister: rest.removeMobility,
      state: filters.contractTypes,
    },
    mobilityTypes: {
      addRegister: rest.addMobility,
      removeRegister: rest.removeMobility,
      state: filters.mobilityTypes,
    },
  };

  const { addRegister, removeRegister, state } = obj[type] ?? obj.skills;

  const isSelected = state === id;

  const handleCategoryClick = () => {
    if (isSelected) {
      removeRegister();
      return;
    }

    addRegister(id);
  };

  return {
    handleCategoryClick,
    isSelected,
  };
}
