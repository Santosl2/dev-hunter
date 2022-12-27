import { CategoryItem } from "@/components/atoms";
import { CATEGORIES } from "@/shared/constants/categories";

export function Category() {
  return (
    <ul className="grid grid-cols-auto-1fr gap-2">
      {CATEGORIES.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          $color={category.color}
        />
      ))}
    </ul>
  );
}
