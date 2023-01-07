import { customRender } from "@/shared/tests/customRender";
import { SeniorityProfile } from "./SeniorityProfile";
import { screen } from "@testing-library/react";
import { SENIORITIES } from "@/shared/constants/seniorities";

describe("<SeniorityProfile/>", () => {
  it("should be able to render correctly", () => {
    customRender(<SeniorityProfile />);

    expect(screen.getByTestId("seniority-box")).toBeInTheDocument();
  });

  it("should be able to render all Seniority item", () => {
    customRender(<SeniorityProfile />);

    SENIORITIES.forEach((seniority) => {
      expect(screen.getByText(seniority.title)).toBeInTheDocument();
    });

    expect(screen.getAllByTestId("category-item")).toHaveLength(
      SENIORITIES.length
    );
  });
});
