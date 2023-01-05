import { Badge } from "flowbite-react";

import { MobilityProps } from "./Mobility.types";

export function Mobility({ data }: MobilityProps) {
  if (!data) return null;

  return (
    <section data-testid="developer-mobility-section">
      Está disponível para
      <div className="flex gap-2">
        {data.map((mobility) => (
          <Badge color="success" size="sm" key={mobility.toLocaleLowerCase()}>
            {mobility}
          </Badge>
        ))}
      </div>
    </section>
  );
}
