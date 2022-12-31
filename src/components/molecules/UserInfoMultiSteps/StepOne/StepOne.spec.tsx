import { SENIORITIES } from "@/shared/constants/seniorities";
import { SKILLS } from "@/shared/constants/skills";
import { MultiStepProvider } from "@/shared/contexts";
import { customRender } from "@/shared/tests/customRender";
import { MOCKED_SESSION_USER } from "@/shared/tests/mock";
import { fireEvent, render, screen } from "@testing-library/react";
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

  it("submit button must be disabled", () => {
    render();

    const button = screen.getByText("Continuar");

    expect(button).toBeDisabled();
  });

  it("submit button must be enabled when user select your information", () => {
    render();

    const [skill, seniority] = screen.getAllByTestId("select");

    fireEvent.change(skill, { target: { value: SKILLS[0].id } });
    fireEvent.change(skill, { target: { value: SKILLS[1].id } });

    fireEvent.change(seniority, { target: { value: SENIORITIES[0].id } });

    const button = screen.getByText("Continuar");
    expect(button).toBeEnabled();
  });

  describe("integrations", () => {
    it.todo("start integration tests");
  });
});
