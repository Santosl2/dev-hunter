import { CategoryItem } from "@/components/atoms";
import { SENIORITIES } from "@/shared/constants/seniorities";

export function SeniorityProfile() {
  return (
    <ul
      className="grid grid-cols-auto-1fr gap-2 mt-5"
      data-testid="seniority-box"
    >
      {SENIORITIES.map((seniority) => (
        <CategoryItem
          key={seniority.id}
          id={seniority.id}
          title={seniority.title}
          $color={seniority.color}
          type="seniorities"
        />
      ))}
    </ul>
  );
}
