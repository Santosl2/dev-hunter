import { ModalEnumTypes } from "@/shared/constants/enums";
import { customRender } from "@/shared/tests/customRender";
import { MOCKED_SESSION_USER } from "@/shared/tests/mock";
import { act, fireEvent, screen } from "@testing-library/react";
import { signIn, signOut } from "next-auth/react";
import Router from "next/router";
import { Header } from "./Header";

jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  signOut: jest.fn(),
  signIn: jest.fn(),
}));

jest.mock("next/router", () => ({
  push: jest.fn(),
}));

describe("<Header/>", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it("should be able to render correctly", () => {
    customRender(<Header />, {
      withMockedSession: false,
    });

    expect(screen.getByText("Logue-se com o GitHub")).toBeInTheDocument();
  });

  it("should be able to appear User name when user is logged", () => {
    customRender(<Header />);

    expect(screen.getByText(MOCKED_SESSION_USER.user.name)).toBeInTheDocument();
    expect(screen.getByText("Sair")).toBeInTheDocument();
  });

  it("should be able to call signOut function when click in Sair button", () => {
    customRender(<Header />);

    const signOutButton = screen.getByText("Sair");

    expect(signOutButton).toBeInTheDocument();

    fireEvent.click(signOutButton);

    expect(signOut).toHaveBeenCalled();
  });

  it("should be able to call signIn function when click in Login button", () => {
    customRender(<Header />, {
      withMockedSession: false,
    });

    const signInButton = screen.getByText("Logue-se com o GitHub");

    expect(signInButton).toBeInTheDocument();

    fireEvent.click(signInButton);

    expect(signIn).toHaveBeenCalled();
  });

  it("should be able to call router.push function when click in Logo", () => {
    customRender(<Header />, {
      withMockedSession: false,
    });

    const logoButton = screen.getByTestId("logo");

    expect(logoButton).toBeInTheDocument();

    fireEvent.click(logoButton);

    expect(Router.push).toHaveBeenCalled();
  });

  it("should be able to call openModal function when click in Config button", async () => {
    const { store } = customRender(<Header />);

    const configButton = screen.getByTestId("header-config-button");

    expect(configButton).toBeInTheDocument();

    fireEvent.click(configButton);

    expect(store.getState().modals.modalType).toBe(
      ModalEnumTypes.USER_INFO_MULTI_STEP
    );
    expect(store.getState().modals.isOpen).toBeTruthy();
  });
});
