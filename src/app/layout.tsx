"use client";

import { SessionProvider } from "next-auth/react";

import { Header } from "@/components/organisms/Header/Header";

import "../styles/global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-theme-secondary text-slate-700">
        <SessionProvider refetchOnWindowFocus={false}>
          <Header />
          <main className="container h-16 mx-auto mt-5">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
