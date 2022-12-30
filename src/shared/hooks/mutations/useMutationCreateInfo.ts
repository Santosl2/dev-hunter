import { useMutation } from "@tanstack/react-query";

import { CreateUser } from "@/shared/interfaces/user";
import { createUserInfo } from "@/shared/services/requests/user";

export function useMutationCreateInfo() {
  return useMutation({
    mutationFn: async (data: CreateUser) => createUserInfo(data),
  });
}
