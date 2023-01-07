import { ContractsTypes } from "@/shared/interfaces";
import { customRender } from "@/shared/tests/customRender";
import { screen } from "@testing-library/react";
import { Contract } from "./Contract";

describe("<Contract/>", () => {
  const mockedData: ContractsTypes[] = ["CLT", "PJ"];
  const SELECTED = mockedData[0];

  it("should be able to render correctly", () => {
    customRender(<Contract data={mockedData} />);

    expect(
      screen.getByTestId("developer-contract-section")
    ).toBeInTheDocument();
    expect(screen.getByText("Modelos de contratação")).toBeInTheDocument();

    mockedData.forEach((data) => {
      expect(screen.getByText(data)).toBeInTheDocument();
    });
  });

  it("should be able to not render when data is undefined", () => {
    customRender(<Contract data={undefined} />);

    expect(
      screen.queryByTestId("developer-contract-section")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Modelos de contratação")
    ).not.toBeInTheDocument();
  });

  it("when skill is selected in contract is must have success color and sm size", () => {
    customRender(<Contract data={mockedData} />, {
      initialState: {
        filters: {
          skills: "",
          seniorities: "",
          contractTypes: SELECTED,
          mobilityTypes: "",
        },
      },
    });

    expect(
      screen.getByTestId("developer-contract-section")
    ).toBeInTheDocument();

    const selected = screen.getAllByTestId("developer-contract")[0];

    expect(selected.className).toContain("bg-green-100");
  });
});
