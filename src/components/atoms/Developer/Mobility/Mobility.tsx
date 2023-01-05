import { Badge } from "flowbite-react";

import { MobilityProps } from "./Mobility.types";

export function Mobility({ data }: MobilityProps) {
  if (!data) return null;

  return (
    <section>
      Está disponível para
      <div className="flex gap-2">
        {data.map((mobility) => (
          <Badge color="success" size="sm">
            {mobility}
          </Badge>
        ))}
      </div>
    </section>
  );
}
