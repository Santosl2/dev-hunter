/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { BsCheck } from "react-icons/bs";

import { useFilters } from "@/shared/hooks";

import { CategoryItemFigure } from "./CategoryItem.styles";
import { CategoryItemProps } from "./CategoryItem.types";

export function CategoryItem({
  title,
  image,
  $color = "red",
  isCategory = true,
}: CategoryItemProps) {
  const firstLetter = title[0];

  const {
    addCategory,
    addSeniority,
    filters,
    removeCategory,
    removeSeniority,
  } = useFilters();

  const obj = {
    category: {
      addRegister: addCategory,
      removeRegister: removeCategory,
      state: filters.categories,
    },
    seniority: {
      addRegister: addSeniority,
      removeRegister: removeSeniority,
      state: filters.seniorities,
    },
  };

  const { addRegister, removeRegister, state } = isCategory
    ? obj.category
    : obj.seniority;

  const isSelected = state.includes(title);

  const handleCategoryClick = () => {
    if (isSelected) {
      removeRegister(title);
      return;
    }

    addRegister(title);
  };

  return (
    <li
      className="bg-white flex justify-center items-center min-w-xs p-5 mb-5 gap-5 font-bold shadow-sm rounded-sm cursor-pointer transition-all relative hover:shadow-md hover:-translate-y-2"
      onClick={handleCategoryClick}
    >
      {isSelected && (
        <BsCheck
          className="absolute right-2 top-2 text-emerald-600"
          size={24}
        />
      )}
      <CategoryItemFigure $color={$color}>
        {image ? <img src={image} alt="Category" /> : firstLetter}
      </CategoryItemFigure>
      <p className="text-slate-700 flex flex-col">
        {title}

        <small>+700 cadastrados</small>
      </p>
    </li>
  );
}
