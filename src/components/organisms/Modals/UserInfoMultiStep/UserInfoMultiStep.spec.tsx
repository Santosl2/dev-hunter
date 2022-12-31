import { ModalEnumTypes } from "@/shared/constants/enums";
import { MultiStepProvider } from "@/shared/contexts";
import { customRender } from "@/shared/tests/customRender";
import { act, screen } from "@testing-library/react";
import { UserInfoMultiStep } from "./UserInfoMultiStep";

describe("<UserInfoMultiStep/>", () => {
  const initialState = {
    modals: {
      modalType: ModalEnumTypes.USER_INFO_MULTI_STEP,
      isOpen: true,
    },
  };

  const component = (
    <MultiStepProvider>
      <UserInfoMultiStep />
    </MultiStepProvider>
  );

  const render = async (withMockedSession: boolean = true) => {
    await act(async () => {
      customRender(component, {
        withMockedSession,
        initialState,
      });
    });
  };

  it("should be able to render correctly when user is logged", async () => {
    await render();

    expect(screen.getByTestId("user-info-multi-step")).toBeInTheDocument();
  });

  it("should be able to not render when user is not logged", async () => {
    await render(false);

    expect(
      screen.queryByTestId("user-info-multi-step")
    ).not.toBeInTheDocument();
  });

  it("should be able to appear current step correctly", async () => {
    await render();

    expect(screen.getByText("Etapa 1 de 3")).toBeInTheDocument();
  });
});
