import { useMutation } from "@tanstack/react-query";

import { UpdateProfileData } from "@/shared/interfaces/user";
import { queryClient } from "@/shared/services/queryClient";
import { updateUserProfile } from "@/shared/services/requests/user";

export function useMutationUpdateProfile() {
  return useMutation({
    mutationFn: async (data: UpdateProfileData) => updateUserProfile(data),
    onSuccess: () => {
      queryClient.refetchQueries(["userInfo"]);
    },
  });
}
