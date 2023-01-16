/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

"use client";

import { useCallback } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BiCog } from "react-icons/bi";

import { signIn, signOut, useSession } from "next-auth/react";
import Router from "next/router";

import { UserPicture } from "@/components/atoms";
import { ModalEnumTypes } from "@/shared/constants/enums";
import { useModals } from "@/shared/hooks";

import { Button } from "../../atoms/Button/Button";

export function Header() {
  const { openModal } = useModals();

  const { data } = useSession();

  const onSignIn = useCallback(() => {
    signIn("github");
  }, []);

  const openModalConfig = () => {
    openModal(ModalEnumTypes.USER_INFO_MULTI_STEP);
  };

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-green-600">
      <div className="container flex flex-wrap items-center justify-between  h-16 mx-auto text-white">
        <div
          onClick={() => Router.push("/")}
          className="flex items-center cursor-pointer"
          data-testid="logo"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Dev Hunter
          </span>
        </div>
        <div className="flex items-center md:order-2">
          {data?.user ? (
            <>
              <UserPicture />
              <div className="r-4 mx-4 h-7 w-2 space-y-2 border-r border-gray-200" />

              <BiCog
                className="mr-4 cursor-pointer"
                onClick={openModalConfig}
                data-testid="header-config-button"
              />
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
