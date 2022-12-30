import { CreateUser, UserInfo } from "@/shared/interfaces/user";

import { api } from "../api";

export function getUserInfo() {
  return api.get<UserInfo>("/users/me");
}

export function createUserInfo(data: CreateUser) {
  return api.post("/users/info", data);
}
