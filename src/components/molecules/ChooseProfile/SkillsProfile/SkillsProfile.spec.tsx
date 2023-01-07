import { customRender } from "@/shared/tests/customRender";
import { SkillsProfile } from "./SkillsProfile";
import { screen } from "@testing-library/react";
import { SKILLS } from "@/shared/constants/skills";

describe("<SkillsProfile/>", () => {
  it("should be able to render correctly", () => {
    customRender(<SkillsProfile />);

    expect(screen.getByTestId("skills-box")).toBeInTheDocument();
  });

  it("should be able to render all skills item", () => {
    customRender(<SkillsProfile />);

    SKILLS.forEach((skill) => {
      expect(screen.getByText(skill.title)).toBeInTheDocument();
    });

    expect(screen.getAllByTestId("category-item")).toHaveLength(SKILLS.length);
  });
});
