import { customRender } from "@/shared/tests/customRender";
import { render, screen } from "@testing-library/react";
import { Results } from "./Results";

const mockedPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: "/",
  }),
}));
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("<Results/>", () => {
  it("should be able to render correctly with loading", () => {
    customRender(<Results />);

    expect(screen.getByTestId("random-message")).toBeInTheDocument();
  });

  it("'NoResults' component must be rendered when there isn't have any registers", async () => {
    customRender(<Results />);

    expect(await screen.findByTestId("no-results")).toBeInTheDocument();
  });

  it("'Developers' component must be rendered when there has registers", async () => {
    customRender(<Results />, {
      initialState: {
        filters: {
          contractTypes: "Freelancer",
          mobilityTypes: "1",
          seniorities: "",
          skills: "",
        },
      },
    });

    expect(await screen.findAllByTestId("developer")).not.toHaveLength(0);
    expect(screen.queryByText("no-results")).not.toBeInTheDocument();
    expect(screen.getByTestId("party")).toBeInTheDocument();
    expect(screen.getByText("Voltar")).toBeInTheDocument();
  });
});
