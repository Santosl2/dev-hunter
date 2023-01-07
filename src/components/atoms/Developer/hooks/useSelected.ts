import { useCallback } from "react";

import { SUCCESS_BADGE_DATA } from "@/shared/constants";
import { useFilters } from "@/shared/hooks";
import { FiltersStateKeys } from "@/shared/interfaces/states";

type UseSelectedProps = {
  data: string;
  type: FiltersStateKeys;
};

const defaultBgColorByFilterType: Record<FiltersStateKeys, string> = {
  skills: "success",
  seniorities: "blue",
  contractTypes: "info",
  mobilityTypes: "purple",
};

const styles = {
  selected: {
    bgColor: SUCCESS_BADGE_DATA.bgColor,
    size: SUCCESS_BADGE_DATA.size,
  },
  notSelected: {
    bgColor: "gray",
    size: "xs",
  },
};

export function useSelected() {
  const { filters } = useFilters();

  const verifyIfIsSelectedAndGetStyles = useCallback(
    ({ data, type }: UseSelectedProps) => {
      if (!filters[type])
        return { bgColor: defaultBgColorByFilterType[type], size: "sm" };

      const isSelectedFilterSkill = data === filters[type].toString();

      const param = isSelectedFilterSkill ? "selected" : "notSelected";
      const { bgColor, size } = styles[param];

      return {
        bgColor,
        size,
      };
    },
    [filters]
  );

  return verifyIfIsSelectedAndGetStyles;
}
