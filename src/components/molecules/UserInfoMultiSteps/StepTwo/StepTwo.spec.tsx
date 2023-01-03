import { MultiStepProvider } from "@/shared/contexts";
import { customRender } from "@/shared/tests/customRender";
import { act, fireEvent, screen } from "@testing-library/react";
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

  it("submit button must be enabled when user type your bio info", async () => {
    render();

    expect(screen.getByRole("button", { name: /continuar/i })).toBeDisabled();

    const input = screen.getByRole("textbox");

    await act(async () => {
      fireEvent.change(input, { target: { value: "My bio test bro" } });
    });

    expect(screen.getByRole("button", { name: /continuar/i })).toBeEnabled();
  });

  it("should be able to appear input errors", async () => {
    render();

    const button = screen.getByText("Continuar");

    await act(async () => {
      fireEvent.click(button);
    });

    expect(
      screen.getByText("Conte-nos um pouco sobre você")
    ).toBeInTheDocument();
  });

  describe("integrations", () => {
    it.todo("start integration tests");
  });
});
