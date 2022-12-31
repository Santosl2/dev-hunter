import { MultiStepProvider } from "@/shared/contexts";
import { customRender } from "@/shared/tests/customRender";
import { fireEvent, screen } from "@testing-library/react";
import { StepThree } from "./StepThree";

describe("<StepThree/>", () => {
  const render = () =>
    customRender(
      <MultiStepProvider>
        <StepThree />
      </MultiStepProvider>
    );

  it("should be able to render correctly", () => {
    render();

    expect(screen.getByTestId("step-three")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("https://www.linkedin.com/in/")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("https://github.com/")
    ).toBeInTheDocument();
  });

  it("submit button must be disabled", () => {
    render();

    expect(screen.getByRole("button", { name: /Finalizar!/i })).toBeDisabled();
  });

  it("submit button must be enabled when user type your linkedin info", () => {
    render();

    expect(screen.getByRole("button", { name: /Finalizar!/i })).toBeDisabled();

    const linkedinInput = screen.getByPlaceholderText(
      "https://www.linkedin.com/in/"
    );
    const githubInput = screen.getByPlaceholderText("https://github.com/");

    fireEvent.change(linkedinInput, {
      target: { value: "https://www.linkedin.com/in/mfilype" },
    });

    fireEvent.change(githubInput, {
      target: { value: "https://github.com/Santosl2" },
    });

    expect(screen.getByRole("button", { name: /Finalizar!/i })).toBeEnabled();
  });

  describe("integrations", () => {
    it.todo("start integration tests");
  });
});
