import { User } from "@/shared/interfaces/user";
import { customRender } from "@/shared/tests/customRender";
import { fireEvent, screen } from "@testing-library/react";
import { Developer } from "./Developer";

const mockedPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockedPush,
    pathname: "/",
  }),
}));

describe("<Developer/>", () => {
  const mockedDeveloper: User = {
    _id: "0800",
    name: "mocked",
    login: "santosl2c",
    avatar_url: "007.png",
    location: "brazil",
    bio: "Eu tenho uma bio",
    seniority: 2,
    skills: ["1", "4", "3"],
    linkedin: "https://www.linkedin.com/in/mfilype",
    contract_type: ["PJ", "CLT"],
    mobility_type: ["Remoto", "Presencial"],
  };

  it("should be able to render correctly", () => {
    customRender(<Developer developer={mockedDeveloper} index={1} />);

    expect(screen.getByTestId("developer-avatar")).toBeInTheDocument();

    expect(screen.getByTestId("developer-avatar")).toHaveAttribute(
      "src",
      mockedDeveloper.avatar_url
    );

    expect(screen.getByTestId("developer-footer")).toBeInTheDocument();

    expect(
      screen.getByTestId("developer-social-media-section")
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("developer-contract-section")
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("developer-mobility-section")
    ).toBeInTheDocument();

    expect(screen.getByTestId("developer-skills-section")).toBeInTheDocument();

    expect(screen.getAllByTestId("developer-skills")).toHaveLength(
      mockedDeveloper.skills!.length
    );

    mockedDeveloper.contract_type!.forEach((contract) => {
      expect(screen.getByText(contract)).toBeInTheDocument();
    });

    mockedDeveloper.mobility_type!.forEach((mobility) => {
      expect(screen.getByText(mobility)).toBeInTheDocument();
    });
  });

  it("must be call router.push when click in BOX", () => {
    customRender(<Developer developer={mockedDeveloper} index={1} />);

    const box = screen.getByTestId("developer");

    fireEvent.click(box);

    expect(mockedPush).toHaveBeenCalled();
  });
});
