import { useCallback } from "react";

import { Badge } from "flowbite-react";

import { SKILLS } from "@/shared/constants/skills";
import { useFilters } from "@/shared/hooks";

import { SkillsProps } from "./Skills.types";

export function Skills({ data }: SkillsProps) {
  const { filters } = useFilters();

  const getSkillName = useCallback(
    (skill: number) =>
      SKILLS.find(({ id }) => id === Number(skill))
        ?.title.replace(/Developer/gi, "")
        .trim(),
    []
  );

  const isSelectedFilterSkillData = (id: string) => {
    const isSelectedFilterSkill = id === filters.skills.toString();

    const bgColor = isSelectedFilterSkill ? "success" : "gray";
    const size = isSelectedFilterSkill ? "sm" : "xs";

    return {
      bgColor,
      size,
    };
  };

  if (!data) return null;

  return (
    <section data-testid="developer-skills-section">
      Habilidades ({data.length})
      <div className="flex gap-2">
        {data.map((skill) => {
          const { bgColor, size } = isSelectedFilterSkillData(skill);

          return (
            <Badge
              color={bgColor}
              size={size}
              key={skill}
              data-testid="developer-skills"
            >
              {getSkillName(Number(skill))}
            </Badge>
          );
        })}
      </div>
    </section>
  );
}
