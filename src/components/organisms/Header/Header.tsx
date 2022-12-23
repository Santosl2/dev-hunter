"use client";

import { useCallback } from "react";
import { AiOutlineGithub } from "react-icons/ai";

import { signIn, signOut, useSession } from "next-auth/react";

import { UserPicture } from "@/components/atoms";

import { Button } from "../../atoms/Button/Button";

export function Header() {
  const { data, status } = useSession();

  const onSignIn = useCallback(() => {
    signIn("github");
  }, []);

  if (status === "loading") return null;

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-green-600">
      <div className="container flex flex-wrap items-center justify-between  h-16 mx-auto text-white">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            find.devs
          </span>
        </a>
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
