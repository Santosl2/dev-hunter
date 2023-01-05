import { Badge } from "flowbite-react";

import { ContractProps } from "./Contract.types";

export function Contract({ data }: ContractProps) {
  if (!data) return null;

  return (
    <section data-testid="developer-contract-section">
      Modelos de contratação
      <div className="flex gap-2">
        {data.map((contract) => (
          <Badge size="sm" key={contract.toLocaleLowerCase()}>
            {contract}
          </Badge>
        ))}
      </div>
    </section>
  );
}
