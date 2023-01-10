import { type Repository as RepositoryTypes } from "@/shared/interfaces/repositories";
import { customRender } from "@/shared/tests/customRender";
import { Repository } from "./Repository";
import { fireEvent, screen } from "@testing-library/react";

describe("<Repository/>", () => {
  const mockedRepositoryData: RepositoryTypes = {
    description: "Test description",
    html_url: "https://www.linkedin.com/in/mfilype/",
    id: 8000,
    name: "Test name",
  };

  let windowSpy: jest.SpyInstance;

  beforeAll(() => {
    windowSpy = jest.spyOn(window, "open");
  });

  afterAll(() => {
    windowSpy.mockRestore();
  });

  it("should be able to render correctly", () => {
    customRender(<Repository {...mockedRepositoryData} />);

    expect(screen.getByText(mockedRepositoryData.name)).toBeInTheDocument();
    expect(
      screen.getByText(mockedRepositoryData.description)
    ).toBeInTheDocument();
    expect(screen.getByText("Ver repositório no GitHub")).toBeInTheDocument();
  });

  it("must be able to call router.push func when click in See in github button", () => {
    customRender(<Repository {...mockedRepositoryData} />);

    const githubButton = screen.getByText("Ver repositório no GitHub");

    expect(githubButton).toBeInTheDocument();

    fireEvent.click(githubButton);

    expect(window.open).toHaveBeenCalled();
    expect(window.open).toHaveBeenCalledWith(mockedRepositoryData.html_url);
  });
});
