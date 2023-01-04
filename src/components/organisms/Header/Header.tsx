/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

"use client";

import { useCallback } from "react";
import { AiOutlineGithub } from "react-icons/ai";

import { signIn, signOut, useSession } from "next-auth/react";
import Router from "next/router";

import { UserPicture } from "@/components/atoms";

import { Button } from "../../atoms/Button/Button";

export function Header() {
  const { data } = useSession();

  const onSignIn = useCallback(() => {
    signIn("github");
  }, []);

  const goMainPage = () => {
    Router.push("/");
  };
  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-green-600">
      <div className="container flex flex-wrap items-center justify-between  h-16 mx-auto text-white">
        <div
          onClick={goMainPage}
          className="flex items-center cursor-pointer"
          data-testid="logo"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            find.devs
          </span>
        </div>
        <div className="flex items-center md:order-2">
          {data?.user ? (
            <>
              <UserPicture />
              <div className="r-4 mx-4 h-7 w-2 space-y-2 border-r border-gray-200" />
              <Button $variant="green" $size="sm" onClick={() => signOut()}>
                Sair
              </Button>
            </>
          ) : (
            <Button
              $variant="github"
              iconLeft={<AiOutlineGithub size={24} />}
              onClick={onSignIn}
            >
              Logue-se com o GitHub
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
