import { customRender } from "@/shared/tests/customRender";
import { MOCKED_SESSION_USER } from "@/shared/tests/mock";
import { fireEvent, screen } from "@testing-library/react";
import { CategoryItem } from "./CategoryItem";
import { CategoryItemModifiers } from "./CategoryItem.styles";

describe("<CategoryItem/>", () => {
  it("should be able to render correctly", () => {
    customRender(<CategoryItem title="Title" id={1} />);

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByTestId("category-item")).toBeInTheDocument();
  });

  it("should be able to add category correctly", () => {
    const { store } = customRender(<CategoryItem title="Title" id={1} />);

    const categorySelector = screen.getByTestId("category-item");

    fireEvent.click(categorySelector);

    expect(store.getState().filters.skills).toEqual(1);
  });

  it("should be able to remove category correctly", () => {
    const { store } = customRender(<CategoryItem title="Title" id={1} />);

    const categorySelector = screen.getByTestId("category-item");

    fireEvent.click(categorySelector);

    expect(store.getState().filters.skills).toEqual(1);

    fireEvent.click(categorySelector);

    expect(store.getState().filters.skills).toEqual(0);
  });

  it("should be able to add seniority correctly", () => {
    const { store } = customRender(
      <CategoryItem title="Title" type="seniorities" id={1} />
    );

    const categorySelector = screen.getByTestId("category-item");

    fireEvent.click(categorySelector);

    expect(store.getState().filters.seniorities).toEqual(1);
  });

  it("should be able to remove seniority correctly", () => {
    const { store } = customRender(
      <CategoryItem title="Title" type="seniorities" id={1} />
    );

    const categorySelector = screen.getByTestId("category-item");

    fireEvent.click(categorySelector);

    expect(store.getState().filters.seniorities).toEqual(1);

    fireEvent.click(categorySelector);

    expect(store.getState().filters.seniorities).toEqual(0);
  });

  /* Can i do this? */
  Object.keys(CategoryItemModifiers).map((modifier) => {
    it(`should be able to render figure with ${modifier} correctly`, () => {
      customRender(
        <CategoryItem
          title="Title"
          type="seniorities"
          $color={modifier}
          id={1}
        />
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
