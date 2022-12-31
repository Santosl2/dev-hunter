import { MultiStepProvider } from "@/shared/contexts";
import { customRender } from "@/shared/tests/customRender";
import { fireEvent, screen } from "@testing-library/react";
import { StepTwo } from "./StepTwo";

describe("<StepTwo/>", () => {
  const render = () =>
    customRender(
      <MultiStepProvider>
        <StepTwo />
      </MultiStepProvider>
    );

  it("should be able to render correctly", () => {
    render();

    expect(screen.getByTestId("step-two")).toBeInTheDocument();
    expect(
      screen.getByText(/Conte-nos um pouco sobre você/i)
    ).toBeInTheDocument();

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /voltar/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /continuar/i })
    ).toBeInTheDocument();
  });

  it("submit button must be disabled", () => {
    render();

    expect(screen.getByRole("button", { name: /continuar/i })).toBeDisabled();
  });

  it("submit button must be enabled when user type your bio info", () => {
    render();

    expect(screen.getByRole("button", { name: /continuar/i })).toBeDisabled();

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "My bio" } });

    expect(screen.getByRole("button", { name: /continuar/i })).toBeEnabled();
  });

  describe("integrations", () => {
    it.todo("start integration tests");
  });
});
