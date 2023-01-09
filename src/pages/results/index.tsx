import { useEffect } from "react";

import { motion } from "framer-motion";
import Router from "next/router";

import { Results } from "@/components/templates";
import { SEO } from "@/SEO";
import { useFilters } from "@/shared/hooks";
import { baseAnimationVariant } from "@/shared/variants";

export default function Result() {
  const { filters } = useFilters();

  useEffect(() => {
    if (!filters.skills || !filters.seniorities) Router.push("/");
  }, [filters]);

  return (
    <motion.article
      variants={baseAnimationVariant}
      animate="animate"
      exit="exit"
      initial="initial"
    >
      <SEO
        title="Resultados"
        description="Resultados da busca de desenvolvedores"
      />

      <Results />
    </motion.article>
  );
}
