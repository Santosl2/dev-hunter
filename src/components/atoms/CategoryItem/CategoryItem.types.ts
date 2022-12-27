import { Colors } from "@/shared/interfaces";

export type CategoryItemColors = {
  $color?: Colors;
};

export type CategoryItemProps = CategoryItemColors & {
  title: string;
  image?: string;
  isCategory?: boolean;
};

export type CategoryItemStylesVariantObject = Record<Colors, string>;
