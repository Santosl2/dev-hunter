import { customRender } from "@/shared/tests/customRender";
import { Skills } from "./Skills";
import { screen } from "@testing-library/react";
import { SKILLS } from "@/shared/constants/skills";

describe("<Skills/>", () => {
  it("should be able to render correctly", () => {
    customRender(<Skills />);

    expect(screen.getByTestId("skills-box")).toBeInTheDocument();
  });

  it("should be able to render all skills item", () => {
    customRender(<Skills />);

    SKILLS.forEach((skill) => {
      expect(screen.getByText(skill.title)).toBeInTheDocument();
    });

    expect(screen.getAllByTestId("category-item")).toHaveLength(SKILLS.length);
  });
});
