import { CreateUser, UpdateProfileData, User } from "@/shared/interfaces/user";

import { api } from "../api";

export function getUserInfo() {
  return api.get<User>("/users/me");
}

export function createUserInfo(data: CreateUser) {
  return api.post("/users/info", data);
}

export function updateUserProfile(data: UpdateProfileData) {
  return api.put("/users/info/update", data);
}
