import { customRender } from "@/shared/tests/customRender";
import { Seniority } from "./Seniority";
import { screen } from "@testing-library/react";
import { SENIORITIES } from "@/shared/constants/seniorities";

describe("<Seniority/>", () => {
  it("should be able to render correctly", () => {
    customRender(<Seniority />);

    expect(screen.getByTestId("seniority-box")).toBeInTheDocument();
  });

  it("should be able to render all Seniority item", () => {
    customRender(<Seniority />);

    SENIORITIES.forEach((seniority) => {
      expect(screen.getByText(seniority.title)).toBeInTheDocument();
    });

    expect(screen.getAllByTestId("category-item")).toHaveLength(
      SENIORITIES.length
    );
  });
});
