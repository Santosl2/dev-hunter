import { Colors } from "@/shared/interfaces";
import { FiltersStateKeys } from "@/shared/interfaces/states";

export type CategoryItemColors = {
  $color?: Colors;
};

export type CategoryItemProps = CategoryItemColors & {
  id: number;
  title: string;
  image?: string;
  type?: FiltersStateKeys;
};

export type CategoryObjectProps = Record<
  FiltersStateKeys,
  {
    addRegister: (id: number) => void;
    removeRegister: (id: number) => void;
    state: string | number;
  }
>;

export type CategoryItemStylesVariantObject = Record<Colors, string>;
