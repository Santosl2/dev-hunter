import { useMutation } from "@tanstack/react-query";

import { FiltersStateProps } from "@/shared/interfaces/states";
import { getDevelopers } from "@/shared/services/requests/developers";

export function useMutationGetDevelopers() {
  return useMutation({
    mutationFn: async (data: FiltersStateProps) => getDevelopers(data),
  });
}
