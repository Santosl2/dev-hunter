import { CategoryItem } from "@/components/atoms";
import { SKILLS } from "@/shared/constants/skills";

export function Category() {
  return (
    <ul className="grid grid-cols-auto-1fr gap-2">
      {SKILLS.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          $color={category.color}
        />
      ))}
    </ul>
  );
}
