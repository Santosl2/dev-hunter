import { SENIORITIES } from "@/shared/constants/seniorities";
import { SKILLS } from "@/shared/constants/skills";
import { MultiStepProvider } from "@/shared/contexts";
import { customRender } from "@/shared/tests/customRender";
import { MOCKED_SESSION_USER } from "@/shared/tests/mock";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { StepOne } from "./StepOne";

describe("<StepOne/>", () => {
  const render = () =>
    customRender(
      <MultiStepProvider>
        <StepOne />
      </MultiStepProvider>
    );

  it("should be able to render correctly", () => {
    render();

    const regex = new RegExp(
      `Quais são suas Skills, ${MOCKED_SESSION_USER.user.name}`
    );

    const selects = screen.getAllByTestId("select");

    expect(screen.getByText(/Quais são suas Skills,/i)).toBeInTheDocument();
    expect(screen.getByText(regex)).toBeInTheDocument();
    expect(screen.getByText(/E a sua senioridade ?/i)).toBeInTheDocument();
    expect(screen.getByTestId("step-one")).toBeInTheDocument();
    expect(selects).toHaveLength(2);
  });

  it("should be able to render Skills input with all options", () => {
    render();

    SKILLS.forEach((skill) => {
      expect(
        screen.getByRole("option", { name: skill.title })
      ).toBeInTheDocument();
    });
  });

  it("should be able to render Seniority input with all options", () => {
    render();

    SENIORITIES.forEach((seniority) => {
      expect(
        screen.getByRole("option", { name: seniority.title })
      ).toBeInTheDocument();
    });
  });

  // it("should be able to select Skills and Seniority", async () => {
  //   render();

  //   const selects = screen.getAllByTestId("select");

  //   const [skillsSelect, senioritySelect] = selects;

  //   fireEvent.change(skillsSelect, {
  //     target: { value: SKILLS[0].title },
  //   });

  //   fireEvent.change(senioritySelect, {
  //     target: { value: SENIORITIES[0].title },
  //   });

  //   const button = screen.getByText("Continuar");

  //   expect(button).toBeEnabled();
  // });

  describe("integrations", () => {
    it.todo("start integration tests");
  });
});
