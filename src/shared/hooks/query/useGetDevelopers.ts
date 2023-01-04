import { useQuery } from "@tanstack/react-query";

import { FiltersStateProps } from "@/shared/interfaces/states";
import { getDevelopers } from "@/shared/services/requests/developers";

export function useGetDevelopers(data: FiltersStateProps) {
  return useQuery({
    queryKey: ["getDevelopers"],
    queryFn: () => getDevelopers(data),
  });
}
