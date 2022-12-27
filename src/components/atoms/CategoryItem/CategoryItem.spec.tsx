import { customRender } from "@/shared/tests/customRender";
import { MOCKED_SESSION_USER } from "@/shared/tests/mock";
import { fireEvent, screen } from "@testing-library/react";
import { CategoryItem } from "./CategoryItem";
import { CategoryItemModifiers } from "./CategoryItem.styles";

describe("<CategoryItem/>", () => {
  it("should be able to render correctly", () => {
    customRender(<CategoryItem title="Title" />);

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByTestId("category-item")).toBeInTheDocument();
  });

  it("should be able to add category correctly", () => {
    const { store } = customRender(<CategoryItem title="Title" />);

    const categorySelector = screen.getByTestId("category-item");

    fireEvent.click(categorySelector);

    expect(store.getState().filters.categories).toEqual(["Title"]);
  });

  it("should be able to remove category correctly", () => {
    const { store } = customRender(<CategoryItem title="Title" />);

    const categorySelector = screen.getByTestId("category-item");

    fireEvent.click(categorySelector);

    expect(store.getState().filters.categories).toEqual(["Title"]);

    fireEvent.click(categorySelector);

    expect(store.getState().filters.categories).toEqual([]);
  });

  it("should be able to add seniority correctly", () => {
    const { store } = customRender(
      <CategoryItem title="Title" type="seniorities" />
    );

    const categorySelector = screen.getByTestId("category-item");

    fireEvent.click(categorySelector);

    expect(store.getState().filters.seniorities).toEqual(["Title"]);
  });

  it("should be able to remove seniority correctly", () => {
    const { store } = customRender(
      <CategoryItem title="Title" type="seniorities" />
    );

    const categorySelector = screen.getByTestId("category-item");

    fireEvent.click(categorySelector);

    expect(store.getState().filters.seniorities).toEqual(["Title"]);

    fireEvent.click(categorySelector);

    expect(store.getState().filters.seniorities).toEqual([]);
  });

  /* Can i do this? */
  Object.keys(CategoryItemModifiers).map((modifier) => {
    it(`should be able to render figure with ${modifier} correctly`, () => {
      customRender(
        <CategoryItem title="Title" type="seniorities" $color={modifier} />
      );

      const categoryFigureBoxSelector = screen.getByTestId(
        "category-figure-box"
      );

      expect(categoryFigureBoxSelector).toHaveClass(
        CategoryItemModifiers[modifier]
      );
    });
  });
});
