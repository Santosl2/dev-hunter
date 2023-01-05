import { MultiStepProvider } from "@/shared/contexts";
import { customRender } from "@/shared/tests/customRender";
import { StepThree } from "./StepThree";
import { act, fireEvent, screen, waitFor } from "@testing-library/react";

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

    const finishedButton = screen.getByRole("button", { name: /finalizar!/i });

    expect(finishedButton).toBeInTheDocument();
    expect(finishedButton).toBeDisabled();
  });

  it("button must be enabled when user select your infoartions", async () => {
    render();

    const inputLinkedin = screen.getByPlaceholderText(
      "https://www.linkedin.com/in/"
    );

    const [contractSelect, mobilitySelect] = screen.getAllByTestId("select");

    expect(screen.getByRole("button", { name: /finalizar!/i })).toBeDisabled();

    fireEvent.change(inputLinkedin, {
      target: {
        value: "https://www.linkedin.com/in/mfilype",
      },
    });

    fireEvent.change(contractSelect, {
      target: {
        value: "CLT",
      },
    });

    await act(async () => {
      fireEvent.change(mobilitySelect, {
        target: {
          value: "Presencial",
        },
      });
    });

    expect(screen.getByRole("button", { name: /finalizar!/i })).toBeEnabled();
  });
});
