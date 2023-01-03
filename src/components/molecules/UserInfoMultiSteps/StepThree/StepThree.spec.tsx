import { MultiStepProvider } from "@/shared/contexts";
import { customRender } from "@/shared/tests/customRender";
import { act, fireEvent, screen, waitFor } from "@testing-library/react";
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

    expect(screen.getAllByTestId("select")).toHaveLength(2);
  });

  it("submit button must be disabled", () => {
    render();

    expect(screen.getByRole("button", { name: /Finalizar!/i })).toBeDisabled();
  });

  // it("submit button must be enabled when user type your infos", async () => {
  //   render();

  //   expect(screen.getByRole("button", { name: /Finalizar!/i })).toBeDisabled();

  //   const linkedinInput = screen.getByPlaceholderText(
  //     "https://www.linkedin.com/in/"
  //   );

  //   const selects = screen.getAllByTestId("select");

  //   fireEvent.change(linkedinInput, {
  //     target: { value: "https://www.linkedin.com/in/mfilype" },
  //   });

  //   fireEvent.change(selects[0], {
  //     target: { value: "CLT" },
  //   });

  //   fireEvent.change(selects[1], {
  //     target: { value: "Remoto" },
  //   });

  //   expect(
  //     await screen.findByRole("button", { name: /Finalizar!/i })
  //   ).toBeEnabled();
  // });

  it("submit button must be disabled when user type invalid infos", async () => {
    render();

    expect(screen.getByRole("button", { name: /Finalizar!/i })).toBeDisabled();

    const linkedinInput = screen.getByPlaceholderText(
      "https://www.linkedin.com/in/"
    );

    fireEvent.change(linkedinInput, {
      target: { value: "https://www.linkedin.com/in/mfilype" },
    });

    const selects = screen.getAllByTestId("select");

    await act(async () => {
      fireEvent.change(selects[0], {
        target: { value: "CLTs" },
      });
      fireEvent.change(selects[1], {
        target: { value: "Remotos" },
      });
    });

    //expect(screen.getByRole("button", { name: /Finalizar!/i })).toBeEnabled();
  });

  describe("integrations", () => {
    it.todo("start integration tests");
  });
});
