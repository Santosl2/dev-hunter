import { Badge } from "flowbite-react";

import { ContractProps } from "./Contract.types";

export function Contract({ data }: ContractProps) {
  if (!data) return null;

  return (
    <section>
      Modelos de contratação
      <div className="flex gap-2">
        {data.map((contract) => (
          <Badge size="sm">{contract}</Badge>
        ))}
      </div>
    </section>
  );
}
