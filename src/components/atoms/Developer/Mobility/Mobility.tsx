import { Badge } from "flowbite-react";

import { useSelected } from "../hooks";
import { MobilityProps } from "./Mobility.types";

export function Mobility({ data }: MobilityProps) {
  const verifyIfIsSelectedAndGetStyles = useSelected();

  if (!data) return null;

  return (
    <section data-testid="developer-mobility-section">
      Está disponível para
      <div className="flex gap-2">
        {data.map((mobility) => {
          const { bgColor, size } = verifyIfIsSelectedAndGetStyles({
            data: mobility,
            type: "mobilityTypes",
          });

          return (
            <Badge
              color={bgColor}
              size={size}
              key={mobility.toLocaleLowerCase()}
              data-testid="developer-mobility"
            >
              {mobility}
            </Badge>
          );
        })}
      </div>
    </section>
  );
}
