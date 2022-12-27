import { customRender } from "@/shared/tests/customRender";
import { MOCKED_SESSION_USER } from "@/shared/tests/mock";
import { screen } from "@testing-library/react";
import { UserPicture } from "./UserPicture";

describe("<UserPicture/>", () => {
  it("should be able to render correctly", () => {
    customRender(<UserPicture />);

    expect(screen.getByText(MOCKED_SESSION_USER.user.name)).toBeInTheDocument();
    expect(screen.getByAltText("User profile").getAttribute("src")).toBe(
      MOCKED_SESSION_USER.user.image
    );
  });
});
