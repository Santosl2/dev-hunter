import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "@/shared/services/requests/user";

export function useUserInfo() {
  return useQuery({ queryKey: ["userInfo"], queryFn: getUserInfo });
}
