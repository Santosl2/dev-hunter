import { useEffect } from "react";

import { RandomMessage, Spinner } from "@/components/atoms";
import { useFilters, useMutationGetDevelopers } from "@/shared/hooks";

export function Results() {
  const { filters } = useFilters();

  console.log(filters);

  const { mutate } = useMutationGetDevelopers();

  useEffect(() => {
    mutate(filters);
  }, [filters]);

  return (
    <section className="flex justify-center items-center h-screen flex-col gap-5 p-2">
      <Spinner size={16} />
      <RandomMessage />
    </section>
  );
}
