/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { BiCheck } from "react-icons/bi";

import { useRouter } from "next/router";

import { useFilters } from "@/shared/hooks";

import { Button } from "../Button";

export function GoSearchDevelopers() {
  const { filters } = useFilters();
  const router = useRouter();

  if (!filters.skills || !filters.seniorities) return null;

  return (
    <div
      className="fixed w-full flex justify-center items-center bottom-2"
      onClick={() => {
        router.push("/results");
      }}
      role="button"
      data-testid="go-search-developers"
    >
      <Button $variant="green" iconLeft={<BiCheck />}>
        Pronto! Faça a busca
      </Button>
    </div>
  );
}
