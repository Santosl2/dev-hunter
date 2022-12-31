import { customRender } from "@/shared/tests/customRender";
import { Select } from "./Select";
import { fireEvent, screen } from "@testing-library/react";

describe("<Select/>", () => {
  const mockedOnChange = jest.fn();
  const mockedOptions = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  it("should be able to render correctly", () => {
    const { debug } = customRender(
      <Select options={mockedOptions} onChange={mockedOnChange} />
    );

    expect(screen.getByTestId("select")).toBeInTheDocument();

    mockedOptions.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("should be able to call onChange function", () => {
    customRender(<Select options={mockedOptions} onChange={mockedOnChange} />);

    const select = screen.getByTestId("select");

    fireEvent.change(select, {
      target: { value: mockedOptions[0].value },
    });

    expect(mockedOnChange).toHaveBeenCalled();
    expect(mockedOnChange).toHaveBeenCalledWith(mockedOptions[0]);
  });
});
