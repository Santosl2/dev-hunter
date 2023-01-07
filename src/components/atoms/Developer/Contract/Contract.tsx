import { Badge } from "flowbite-react";

import { useSelected } from "../hooks";
import { ContractProps } from "./Contract.types";

export function Contract({ data }: ContractProps) {
  const verifyIfIsSelectedAndGetStyles = useSelected();

  if (!data) return null;

  return (
    <section data-testid="developer-contract-section">
      Modelos de contratação
      <div className="flex gap-2">
        {data.map((contract) => {
          const { bgColor, size } = verifyIfIsSelectedAndGetStyles({
            data: contract,
            type: "contractTypes",
          });

          return (
            <Badge
              size={size}
              color={bgColor}
              key={contract.toLocaleLowerCase()}
              data-testid="developer-contract"
            >
              {contract}
            </Badge>
          );
        })}
      </div>
    </section>
  );
}
