import { customRender } from "@/shared/tests/customRender";
import { MobilityProfile } from "./MobilityProfile";
import { screen } from "@testing-library/react";
import { SENIORITIES } from "@/shared/constants/seniorities";
import { MOBILITY_TYPES } from "@/shared/constants";

describe("<MobilityProfile/>", () => {
  it("should be able to render correctly", () => {
    customRender(<MobilityProfile />);

    expect(screen.getByTestId("mobility-box")).toBeInTheDocument();
  });

  it("should be able to render all Mobility item", () => {
    customRender(<MobilityProfile />);

    MOBILITY_TYPES.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    expect(screen.getAllByTestId("category-item")).toHaveLength(
      MOBILITY_TYPES.length
    );
  });
});
