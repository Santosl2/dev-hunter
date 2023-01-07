/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { BsCheck } from "react-icons/bs";

import { CategoryItemFigure } from "./CategoryItem.styles";
import { CategoryItemProps } from "./CategoryItem.types";
import { useCategoryItem } from "./hooks";

export function CategoryItem({
  id,
  title,
  image,
  $color = "red",
  type = "skills",
  showImage = true,
}: CategoryItemProps) {
  const firstLetter = title[0];
  const { handleCategoryClick, isSelected } = useCategoryItem(id, type);

  return (
    <li
      className="bg-white flex items-center min-w-xs p-5 mb-5 gap-5 font-bold shadow-sm rounded-sm cursor-pointer transition-all relative hover:shadow-md hover:-translate-y-2"
      onClick={handleCategoryClick}
      data-testid="category-item"
    >
      {isSelected && (
        <BsCheck
          className="absolute right-2 top-2 text-emerald-600"
          size={24}
        />
      )}

      {showImage && (
        // @ts-ignore
        <CategoryItemFigure $color={$color} data-testid="category-figure-box">
          {image ? <img src={image} alt="Category" /> : firstLetter}
        </CategoryItemFigure>
      )}

      <p className="text-slate-700 flex flex-col">{title}</p>
    </li>
  );
}
