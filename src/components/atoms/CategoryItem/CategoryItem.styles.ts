import tw from "tailwind-styled-components";

import {
  CategoryItemColors,
  CategoryItemStylesVariantObject,
} from "./CategoryItem.types";

const CategoryItemModifiers: CategoryItemStylesVariantObject = {
  red: "bg-red-200 text-red-600",
  blue: "bg-blue-200 text-blue-600",
  yellow: "bg-yellow-200 text-yellow-600",
  green: "bg-green-200 text-green-600",
  "light-blue": "bg-sky-200 text-sky-600",
  purple: "bg-purple-200 text-purple-600",
  pink: "bg-pink-200 text-pink-600",
  teal: "bg-teal-200 text-teal-600",
  emerald: "bg-emerald-400 text-emerald-600",
};

export const CategoryItemFigure = tw.figure<CategoryItemColors>`
 w-12
 h-12 
 rounded-full 
 flex 
 items-center 
 justify-center 

    ${({ $color }) => $color && CategoryItemModifiers[$color]}
`;
