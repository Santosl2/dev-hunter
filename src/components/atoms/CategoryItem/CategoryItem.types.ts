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
  showImage?: boolean;
};

export type CategoryObjectProps = Record<
  FiltersStateKeys,
  {
    addRegister: (id: any) => void;
    removeRegister: (id: any) => void;
    state: string | number;
  }
>;

export type CategoryItemStylesVariantObject = Record<Colors, string>;
