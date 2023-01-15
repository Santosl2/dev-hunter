import axios from "axios";

import { Repository } from "@/shared/interfaces/repositories";

export function getUserRepositories(user: string) {
  return axios.get<Repository[]>(
    `https://api.github.com/users/${user}/repos?sort=created`
  );
}
