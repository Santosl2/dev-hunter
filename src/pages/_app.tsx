/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */

import { Provider } from "react-redux";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { Header } from "@/components/organisms/Header/Header";

import "../styles/global.css";
import { UserInfoMultiStep as UserInfoMultiStepModal } from "@/components/organisms/Modals";
import { MultiStepProvider } from "@/shared/contexts";
import { queryClient } from "@/shared/services/queryClient";
import { store } from "@/shared/store";
import { MissingData } from "@/components";

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SessionProvider refetchOnWindowFocus={false}>
          <Header />
          <Component {...pageProps} />

          <MissingData />

          <MultiStepProvider>
            <UserInfoMultiStepModal />
          </MultiStepProvider>

          <ReactQueryDevtools />
        </SessionProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
