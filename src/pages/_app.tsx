/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { Header } from "@/components/organisms/Header/Header";

import "../styles/global.css";
import { queryClient } from "@/shared/services/queryClient";

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider refetchOnWindowFocus={false}>
        <Header />
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
