import { ModalEnumTypes } from "@/shared/constants/enums";
import { customRender } from "@/shared/tests/customRender";
import { fireEvent, screen } from "@testing-library/react";
import { MissingData } from "./MissingData";

const openModalMock = jest.fn();

jest.mock("../../../shared/hooks/useModals/", () => {
  return {
    useModals: () => ({
      openModal: openModalMock,
    }),
  };
});

describe("<MissingData/>", () => {
  it("should be able to render correctly", () => {
    customRender(<MissingData />);

    expect(screen.getByTestId("missing-data")).toBeInTheDocument();
  });

  it("should be able to fire openModal func", () => {
    customRender(<MissingData />);

    const button = screen.getByText("Finalizar registro");

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(openModalMock).toHaveBeenCalled();
    expect(openModalMock).toHaveBeenCalledWith(
      ModalEnumTypes.USER_INFO_MULTI_STEP
    );
  });
});
