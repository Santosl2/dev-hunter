import { useQuery } from "@tanstack/react-query";

import { FiltersStateProps } from "@/shared/interfaces/states";
import { getDevelopers } from "@/shared/services/requests/developers";

export function useGetDevelopers(data: FiltersStateProps) {
  const dataValues = Object.values(data);
  return useQuery({
    queryKey: ["getDevelopers", ...dataValues],
    queryFn: () => getDevelopers(data),
  });
}
