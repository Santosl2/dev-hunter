/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from "react";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { AppState, StoreType } from "../interfaces";
import { queryClientTest } from "../services/queryClient";
import { combinedReducer } from "../store/modules";
import { MOCKED_SESSION_USER } from "./mock";

type RenderFunction = ReturnType<typeof render>;

type CustomRenderReturn = RenderFunction & {
  store: StoreType;
  renderAgain: () => CustomRenderReturn;
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

  const componentToRender = (
    <QueryClientProvider client={queryClientTest}>
      <Provider store={store}>
        <SessionProvider refetchOnWindowFocus={false} session={session}>
          {component}
        </SessionProvider>
      </Provider>
    </QueryClientProvider>
  );

  const renderedComponent = render(componentToRender);

  return {
    ...renderedComponent,
    renderAgain: () => {
      renderedComponent.unmount();

      return customRender(component, options);
    },
    store,
  };
};
