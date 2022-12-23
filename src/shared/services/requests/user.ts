import { api } from "../api";

export function getUserInfo() {
  return api.get("/users/me");
}
