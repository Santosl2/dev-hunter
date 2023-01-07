import { SKILLS } from "@/shared/constants/skills";
import { customRender } from "@/shared/tests/customRender";
import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("<Skills/>", () => {
  const mockedData = ["1", "2", "3"];
  const SELECTED_ID = "1";

  it("should be able to render correctly", () => {
    customRender(<Skills data={mockedData} />);

    expect(screen.getByTestId("developer-skills-section")).toBeInTheDocument();

    expect(
      screen.getByText(`Habilidades (${mockedData.length})`)
    ).toBeInTheDocument();

    const skills = screen.getAllByTestId("developer-skills");

    expect(skills).toHaveLength(mockedData.length);
  });

  it("when skill is selected in filter is must have success color and sm size", () => {
    customRender(<Skills data={mockedData} />, {
      initialState: {
        filters: {
          skills: SELECTED_ID,
          seniorities: "",
          contractTypes: "",
          mobilityTypes: "",
        },
      },
    });

    expect(screen.getByTestId("developer-skills-section")).toBeInTheDocument();

    const selected = screen.getAllByTestId("developer-skills")[0];

    expect(selected.className).toContain("bg-green-100");
  });
});
