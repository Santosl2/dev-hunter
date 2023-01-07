import { CategoryItem } from "@/components/atoms";
import { MOBILITY_TYPES } from "@/shared/constants";

export function Mobility() {
  return (
    <ul
      className="grid grid-cols-fill-1fr gap-2 mt-5"
      data-testid="mobility-box"
    >
      {MOBILITY_TYPES.map((mobility, index) => (
        <CategoryItem
          id={mobility.value}
          key={mobility.value.toLocaleLowerCase()}
          title={mobility.label}
          $color="blue"
          type="mobilityTypes"
          showImage={false}
        />
      ))}
    </ul>
  );
}
