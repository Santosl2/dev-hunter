import { useMutation } from "@tanstack/react-query";

import { CreateUser } from "@/shared/interfaces/user";
import { queryClient } from "@/shared/services/queryClient";
import { createUserInfo } from "@/shared/services/requests/user";

export function useMutationCreateInfo() {
  return useMutation({
    mutationFn: async (data: CreateUser) => createUserInfo(data),
    onSuccess: () => {
      queryClient.refetchQueries(["userInfo"]);
    },
  });
}
