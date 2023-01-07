import { useCallback } from "react";

import { Badge } from "flowbite-react";

import { SKILLS } from "@/shared/constants/skills";

import { useSelected } from "../hooks";
import { SkillsProps } from "./Skills.types";

export function Skills({ data }: SkillsProps) {
  const verifyIfIsSelectedAndGetStyles = useSelected();

  const getSkillName = useCallback(
    (skill: number) =>
      SKILLS.find(({ id }) => id === Number(skill))
        ?.title.replace(/Developer/gi, "")
        .trim(),
    []
  );

  if (!data) return null;

  return (
    <section data-testid="developer-skills-section">
      Habilidades ({data.length})
      <div className="flex gap-2">
        {data.map((skill) => {
          const { bgColor, size } = verifyIfIsSelectedAndGetStyles({
            data: skill,
            type: "skills",
          });

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
