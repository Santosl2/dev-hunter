import { useEffect } from "react";

import Router from "next/router";

import { Results } from "@/components/templates";
import { SEO } from "@/SEO";
import { useFilters } from "@/shared/hooks";

export default function Result() {
  const { filters } = useFilters();

  useEffect(() => {
    if (!filters.skills || !filters.seniorities) Router.push("/");
  }, [filters]);

  return (
    <>
      <SEO
        title="Resultados"
        description="Resultados da busca de desenvolvedores"
      />

      <Results />
    </>
  );
}
