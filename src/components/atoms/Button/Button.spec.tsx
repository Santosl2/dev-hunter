import { fireEvent, render, screen } from "@testing-library/react";
import { BsHouse } from "react-icons/bs";
import { Button } from "./Button";
import { ButtonModifiers } from "./Button.styles";
import { ButtonVariantArray } from "./Button.types";

describe("<Button/>", () => {
  it("should be able to render correctly", () => {
    render(<Button>Test</Button>);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should be able to render with left icon", () => {
    render(<Button iconLeft={<BsHouse />}>Test</Button>);

    const buttonSelector = screen.getByText("Test");
    const buttonIconLeftSelector = screen.getByTestId("icon-left");

    expect(buttonSelector).toBeInTheDocument();
    expect(buttonIconLeftSelector).toBeInTheDocument();
  });

  it("should be able to render with right icon", () => {
    render(<Button iconRight={<BsHouse />}>Test</Button>);

    const buttonSelector = screen.getByText("Test");
    const buttonIconRightSelector = screen.getByTestId("icon-right");

    expect(buttonSelector).toBeInTheDocument();
    expect(buttonIconRightSelector).toBeInTheDocument();
  });

  it("should be able to render with right and left icon", () => {
    render(
      <Button iconRight={<BsHouse />} iconLeft={<BsHouse />}>
        Test
      </Button>
    );

    const buttonSelector = screen.getByText("Test");
    const buttonIconRightSelector = screen.getByTestId("icon-right");
    const buttonIconLeftSelector = screen.getByTestId("icon-left");

    expect(buttonSelector).toBeInTheDocument();
    expect(buttonIconRightSelector).toBeInTheDocument();
    expect(buttonIconLeftSelector).toBeInTheDocument();
  });

  it("should be able to fire onClick func when user click in button", () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Test</Button>);

    const buttonSelector = screen.getByText("Test");

    expect(buttonSelector).toBeInTheDocument();

    fireEvent.click(buttonSelector);

    expect(onClick).toHaveBeenCalled();
  });

  it.todo("should be able to render with rounded style");

  it.todo("should be able to render with correct size");

  ButtonVariantArray.map((variant) => {
    it(`should be able to render with correct color ${variant} theme`, () => {
      render(<Button $variant={variant}>Test</Button>);
      const buttonSelector = screen.getByText("Test");

      expect(buttonSelector).toBeInTheDocument();

      ButtonModifiers[variant].split(" ").forEach((modifier) => {
        expect(buttonSelector.classList).toContain(modifier);
      });
    });
  });
});
