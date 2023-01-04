import { GetDevelopersRequest } from "@/shared/interfaces/request";
import { FiltersStateProps } from "@/shared/interfaces/states";

import { api } from "../api";

export function getDevelopers({
  contractTypes,
  seniorities,
  skills,
}: FiltersStateProps) {
  return api.post<GetDevelopersRequest>("/developers", {
    seniorities,
    skills,
  });
}
