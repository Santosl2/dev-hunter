import { useQuery } from "@tanstack/react-query";

import { getUserRepositories } from "@/shared/services/requests/repositories";

export function useFindUserRepos(user: string) {
  return useQuery({
    queryKey: ["findUserRepos", user],
    queryFn: () => getUserRepositories(user),
    staleTime: 30,
  });
}
