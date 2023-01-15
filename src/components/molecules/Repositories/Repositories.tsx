import { motion } from "framer-motion";

import { Repository } from "@/components/atoms";
import { useFindUserRepos } from "@/shared/hooks";

import { RepositoriesProps } from "./Repositories.types";

export function Repositories({ user }: RepositoriesProps) {
  const { data, isLoading } = useFindUserRepos(user);
  const rows = data?.data;

  if (isLoading && !rows?.length) return <div>Carregando repositórios...</div>;
  if (!rows?.length)
    return <section>Usuário não possui repositórios ainda.</section>;

  return (
    <motion.article className="grid grid-cols-auto-1fr gap-5 w-full">
      {rows?.map((repo, index) => (
        <Repository key={repo.id} {...repo} index={index} />
      ))}
    </motion.article>
  );
}
