import { CategoryItem } from "@/components/atoms";
import { SKILLS } from "@/shared/constants/skills";

export function Skills() {
  return (
    <ul className="grid grid-cols-auto-1fr gap-2" data-testid="skills-box">
      {SKILLS.map((category) => (
        <CategoryItem
          key={category.id}
          id={category.id}
          title={category.title}
          $color={category.color}
        />
      ))}
    </ul>
  );
}
