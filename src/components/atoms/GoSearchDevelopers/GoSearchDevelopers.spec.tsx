import { customRender } from "@/shared/tests/customRender";
import { fireEvent, screen } from "@testing-library/react";
import { GoSearchDevelopers } from "./GoSearchDevelopers";

const mockedPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockedPush,
    pathname: "/",
  }),
}));

describe("<Index/>", () => {
  const defaultFilters = {
    skills: "1",
    seniorities: "1",
    contractTypes: "1",
    mobilityTypes: "1",
  };

  const render = () =>
    customRender(<GoSearchDevelopers />, {
      initialState: {
        filters: defaultFilters,
      },
    });

  it("should be able to render correctly without missing data", async () => {
    render();

    expect(screen.getByTestId("go-search-developers")).toBeInTheDocument();
    expect(screen.getByText("Pronto! Faça a busca")).toBeInTheDocument();
  });

  it("must be able to call router push", async () => {
    render();

    const goSearchDevelopers = screen.getByTestId("go-search-developers");

    expect(goSearchDevelopers).toBeInTheDocument();

    fireEvent.click(goSearchDevelopers);

    expect(mockedPush).toHaveBeenCalledWith("/results");
  });
});
