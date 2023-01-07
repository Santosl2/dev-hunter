import { SENIORITIES } from "@/shared/constants/seniorities";
import { SKILLS } from "@/shared/constants/skills";
import { customRender } from "@/shared/tests/customRender";
import { fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from ".";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: "/",
  }),
}));

describe("<Index/>", () => {
  it("should be able to render correctly without missing data", async () => {
    customRender(<Home hasPendingData={false} />);

    expect(screen.getByTestId("hero")).toBeInTheDocument();

    const heroTitle = screen.getByTestId("hero-title");

    expect(heroTitle).toBeInTheDocument();
    expect(heroTitle).toHaveTextContent(
      /Encontre desenvolvedores que combinam com sua empresa/i
    );

    expect(
      screen.getByText(
        /Ajudamos empresas a encontrarem desenvolvedores que combinam com a cultura e os valores da empresa./i
      )
    ).toBeInTheDocument();

    expect(screen.getByTestId("hero-image")).toBeInTheDocument();

    // ChooseProfile Component
    expect(screen.getByTestId("choose-profile")).toBeInTheDocument();
    expect(screen.getByText("O que você precisa?")).toBeInTheDocument();
    expect(screen.getByTestId("select")).toBeInTheDocument();
    expect(screen.getByTestId("skills-box")).toBeInTheDocument();
    expect(screen.getByTestId("seniority-box")).toBeInTheDocument();

    expect(screen.getAllByTestId("category-item")).toHaveLength(
      SKILLS.length + SENIORITIES.length
    );
  });

  it("should be able to render missing data", async () => {
    customRender(<Home hasPendingData />);

    expect(screen.getByTestId("missing-data")).toBeInTheDocument();
  });

  it("ready to search button must be appear when user select seniority and skill", async () => {
    customRender(<Home hasPendingData />);

    const firstSkill = screen.getAllByTestId("category-item")[0];
    const seniorityBox = screen.getByTestId("seniority-box");

    const firstSeniority = seniorityBox.children[0];

    expect(
      screen.queryByTestId("go-search-developers")
    ).not.toBeInTheDocument();

    expect(screen.getByTestId("missing-data")).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(firstSkill);
      fireEvent.click(firstSeniority);
    });

    expect(screen.getByTestId("go-search-developers")).toBeInTheDocument();
  });
});
