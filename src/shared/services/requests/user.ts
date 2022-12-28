import { User } from "@/shared/interfaces/user";

import { api } from "../api";

export function getUserInfo() {
  return api.get<User>("/users/me");
}
