import { LocationTypes } from "@/shared/interfaces";
import { customRender } from "@/shared/tests/customRender";
import { screen } from "@testing-library/react";
import { Mobility } from "./Mobility";

describe("<Mobility/>", () => {
  const mockedData: LocationTypes[] = ["Remoto", "Presencial"];

  it("should be able to render correctly", () => {
    customRender(<Mobility data={mockedData} />);

    expect(
      screen.getByTestId("developer-mobility-section")
    ).toBeInTheDocument();
    expect(screen.getByText("Está disponível para")).toBeInTheDocument();

    mockedData.forEach((data) => {
      expect(screen.getByText(data)).toBeInTheDocument();
    });
  });

  it("should be able to not render when data is undefined", () => {
    customRender(<Mobility data={undefined} />);

    expect(
      screen.queryByTestId("developer-mobility-section")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Está disponível para")).not.toBeInTheDocument();
  });
});
