import { RandomMessage, Spinner } from "@/components/atoms";
import { useFilters, useGetDevelopers } from "@/shared/hooks";

export function Results() {
  const { filters } = useFilters();

  const { data } = useGetDevelopers(filters);

  return (
    <section className="flex justify-center items-center h-screen flex-col gap-5 p-2">
      <Spinner size={16} />
      <RandomMessage />
    </section>
  );
}
