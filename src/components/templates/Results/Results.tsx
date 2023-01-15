/* eslint-disable no-underscore-dangle */
import { useEffect, useRef } from "react";

import { useRouter } from "next/router";
import party from "party-js";

import { Button } from "@/components/atoms";
import { Developer } from "@/components/organisms";
import { SEO } from "@/SEO";
import { useFilters, useGetDevelopers } from "@/shared/hooks";

import { LoadingResults } from "../../organisms/LoadingResults";
import { NoResults } from "./NoResults";

export function Results() {
  const { filters } = useFilters();
  const { data, isLoading, isFetched } = useGetDevelopers(filters);

  const router = useRouter();

  const partyRef = useRef<HTMLDivElement>(null);
  const rows = data?.data.rows;

  useEffect(() => {
    if (isFetched && rows?.length && partyRef.current) {
      party.confetti(partyRef.current, {
        count: 70,
      });
    }
  }, [isFetched, rows?.length]);

  if (isLoading && !rows?.length) return <LoadingResults />;
  if (!rows?.length) return <NoResults />;

  return (
    <>
      <SEO title={`${rows.length} resultados`} />
      <section className="container mx-auto p-5">
        <div id="party" ref={partyRef} data-testid="party" />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold flex justify-between">
            Tivemos {rows.length} resultado(s)
            <Button $variant="green" onClick={() => router.push("/")}>
              Voltar
            </Button>
          </h1>
          <div className="grid grid-cols-fill-1fr gap-2">
            {rows.map((developer, index) => (
              <Developer
                developer={developer}
                key={developer._id}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
