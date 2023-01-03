import { customRender } from "@/shared/tests/customRender";
import { Input } from "./Input";

import { screen } from "@testing-library/react";

describe("<Input/>", () => {
  it("should be able to render correctly", () => {
    customRender(<Input type="text" placeholder="Hello Test" />);

    expect(screen.getByPlaceholderText("Hello Test")).toBeInTheDocument();
  });

  it("should be able to render correctly with label", () => {
    customRender(
      <Input type="text" placeholder="Hello Test" label="Hello Label" />
    );

    expect(screen.getByText("Hello Label")).toBeInTheDocument();
  });

  it("should be able to render correctly with icon", () => {
    customRender(
      <Input
        type="text"
        placeholder="Hello Test"
        label="Hello Label"
        icon={<span>Icon</span>}
      />
    );

    const input = screen.getByPlaceholderText("Hello Test");

    expect(screen.getByTestId("input-test-icon")).toBeInTheDocument();

    expect(input.classList).toContain("pl-10");
  });

  it("should be able to render correctly with error border color", () => {
    customRender(
      <Input
        type="text"
        placeholder="Hello Test"
        label="Hello Label"
        error="jesus salva"
      />
    );

    const input = screen.getByPlaceholderText("Hello Test");

    expect(input.classList).toContain("border-red-500");
  });
});
