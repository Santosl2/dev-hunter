import { useMemo } from "react";

import { Select } from "@/components/atoms";
import { Skills, Seniority } from "@/components/molecules/ChooseProfile//";
import { CONTRACT_TYPES } from "@/shared/constants";
import { useFilters } from "@/shared/hooks";

const OPTIONS = [...CONTRACT_TYPES, { label: "Todos", value: "0" }];

export function ChooseProfile() {
  const { addContract, removeContract, filters } = useFilters();
  const defaultValue = useMemo(
    () =>
      CONTRACT_TYPES.find(({ value }) => value === filters.contractTypes) ??
      OPTIONS[1],
    [filters]
  );

  return (
    <section className="container mx-auto p-5" data-testid="choose-profile">
      <div className="flex flex-col py-5">
        <header className="flex justify-between flex-col md:flex-row mb-5 gap-2">
          <h2 className="font-poppins text-xl md:text-4xl font-bold leading-[1.2]">
            O que você precisa?
          </h2>

          <div className="w-full md:w-56">
            <Select
              options={OPTIONS}
              defaultValue={defaultValue}
              onChange={({ value }) => {
                if (value === "0") {
                  return removeContract();
                }

                return addContract(value);
              }}
              placeholder="Tipo de contratação"
            />
          </div>
        </header>

        <Skills />

        <hr />

        <Seniority />
      </div>
    </section>
  );
}
