/* eslint-disable no-underscore-dangle */
import { useEffect, useRef } from "react";

import party from "party-js";

import { Developer } from "@/components/molecules";
import { useFilters, useGetDevelopers } from "@/shared/hooks";

import { LoadingResults } from "./LoadingResults";

export function Results() {
  const { filters } = useFilters();
  const partyRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isFetched } = useGetDevelopers(filters);
  const rows = data?.data.rows;

  useEffect(() => {
    if (isFetched && rows?.length && partyRef.current) {
      party.confetti(partyRef.current, {
        count: 70,
      });
    }
  }, [isFetched, rows?.length]);

  if (isLoading && !rows?.length) return <LoadingResults />;
  if (!rows?.length) return <p>Nenhum resultado encontrado</p>;

  return (
    <section className="container mx-auto p-5">
      <div id="party" ref={partyRef} />
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">
          Tivemos {rows.length} resultado(s)
        </h1>
        <div className="grid grid-cols-fill-1fr gap-5">
          {rows.map((developer) => (
            <Developer developer={developer} key={developer._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
