import { customRender } from "@/shared/tests/customRender";
import { screen } from "@testing-library/react";

import { SocialMediaButtons } from "./SocialMediaButtons";

describe("<SocialMediaButtons/>", () => {
  it("should be able to render correctly", () => {
    customRender(
      <SocialMediaButtons
        github="Santosl2"
        linkedin="https://www.linkedin.com/in/mfilype/"
      />
    );

    const linkedinButton = screen.getByText(/linkedin/i);
    const githubButton = screen.getByText(/github/i);

    expect(
      screen.getByTestId("developer-social-media-section")
    ).toBeInTheDocument();
    expect(githubButton).toBeInTheDocument();
    expect(linkedinButton).toBeInTheDocument();
  });
});
