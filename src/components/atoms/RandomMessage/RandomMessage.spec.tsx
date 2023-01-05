import { customRender } from "@/shared/tests/customRender";
import { act, render, screen } from "@testing-library/react";
import { MESSAGES, RandomMessage } from "./RandomMessage";

describe("<RandomMessage/>", () => {
  it("should be able to render correctly", () => {
    customRender(<RandomMessage />);

    expect(screen.getByTestId("random-message")).toBeInTheDocument();
  });

  it("should be able to change message correctly after 8ms", async () => {
    jest.useFakeTimers();

    customRender(<RandomMessage />);

    await act(async () => {
      jest.advanceTimersToNextTimer(8000);
    });

    expect(screen.getByTestId("random-message").textContent).not.toBe(
      MESSAGES[0]
    );
  });
});
