/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from "react";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { AppState, StoreType } from "../interfaces";
import { combinedReducer } from "../store/modules";
import { MOCKED_SESSION_USER } from "./mock";

type RenderFunction = ReturnType<typeof render>;

type CustomRenderReturn = RenderFunction & {
  store: StoreType;
};

const createTestStore = (initialState: Partial<AppState> = {}) => {
  return configureStore({
    reducer: combinedReducer,
    preloadedState: initialState,
  });
};

type CustomRenderOptionsProps = {
  initialState?: Partial<AppState>;
  withMockedSession?: boolean;
};

export const customRender = (
  component: ReactNode,
  options?: CustomRenderOptionsProps
): CustomRenderReturn => {
  const { initialState, withMockedSession = true } =
    options || ({} as CustomRenderOptionsProps);

  const store = createTestStore(initialState);
  const session = withMockedSession ? MOCKED_SESSION_USER : ({} as Session);

  const renderedComponent = render(
    <Provider store={store}>
      <SessionProvider refetchOnWindowFocus={false} session={session}>
        {component}
      </SessionProvider>
    </Provider>
  );

  return {
    ...renderedComponent,
    store,
  };
};
