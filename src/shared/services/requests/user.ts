import axios from "axios";

import { CreateUser, User, UserLocation } from "@/shared/interfaces/user";

import { api } from "../api";

export function getUserInfo() {
  return api.get<User>("/users/me");
}

export function createUserInfo(data: CreateUser) {
  return api.post("/users/info", data);
}

export function getUserLocation() {
  return axios.get<UserLocation>("https://geolocation-db.com/json/");
}
