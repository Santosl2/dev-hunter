import { ALL_CONTRACT_OPTION, CONTRACT_TYPES } from "@/shared/constants";
import { customRender } from "@/shared/tests/customRender";
import { fireEvent, screen } from "@testing-library/react";
import { ChooseProfile } from "./ChooseProfile";

describe("<ChooseProfile/>", () => {
  it("should be able to render correctly", () => {
    customRender(<ChooseProfile />);

    expect(screen.getByTestId("choose-profile")).toBeInTheDocument();
    expect(screen.getByText("O que você precisa?")).toBeInTheDocument();
    expect(screen.getByTestId("select")).toBeInTheDocument();
    expect(screen.getByTestId("seniority-box")).toBeInTheDocument();
  });

  it("should be able to change contract type", () => {
    const { store } = customRender(<ChooseProfile />);

    const selectContract = screen.getByTestId("select");

    expect(store.getState().filters.contractTypes).toBe("");

    fireEvent.change(selectContract, {
      target: CONTRACT_TYPES[0],
    });

    expect(store.getState().filters.contractTypes).toBe(
      CONTRACT_TYPES[0].value
    );
  });

  it("should be able to change contract type and remove when user select 'Todos' option", () => {
    const { store } = customRender(<ChooseProfile />);

    const selectContract = screen.getByTestId("select");

    expect(store.getState().filters.contractTypes).toBe("");

    fireEvent.change(selectContract, {
      target: CONTRACT_TYPES[2],
    });

    expect(store.getState().filters.contractTypes).toBe(
      CONTRACT_TYPES[2].value
    );

    fireEvent.change(selectContract, {
      target: ALL_CONTRACT_OPTION[0],
    });

    expect(store.getState().filters.contractTypes).toBe("");
  });
});
