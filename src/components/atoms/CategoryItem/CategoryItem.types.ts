import { Colors } from "@/shared/interfaces";
import { FiltersStateKeys } from "@/shared/interfaces/states";

export type CategoryItemColors = {
  $color?: Colors;
};

export type CategoryItemProps = CategoryItemColors & {
  title: string;
  image?: string;
  type?: FiltersStateKeys;
};

export type CategoryObjectProps = Record<
  FiltersStateKeys,
  {
    addRegister: (title: string) => void;
    removeRegister: (title: string) => void;
    state: string[];
  }
>;

export type CategoryItemStylesVariantObject = Record<Colors, string>;
