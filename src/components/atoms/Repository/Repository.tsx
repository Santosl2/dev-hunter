/* eslint-disable camelcase */
import { AiOutlineGithub } from "react-icons/ai";

import { motion } from "framer-motion";

import { Repository } from "@/shared/interfaces/repositories";
import { baseAnimationVariant } from "@/shared/variants";

import { Button } from "../Button";

export function Repository({
  description,
  html_url,
  id,
  name,
  index,
}: Repository) {
  return (
    <motion.div
      className="flex flex-col gap-5 bg-white w-full max-w-full md:max-w-lg shadow-sm p-5 transition-all hover:shadow-md justify-between"
      variants={baseAnimationVariant}
      animate="animate"
      initial="initial"
      exit="exit"
      transition={{
        delay: (index ?? 0) * 0.1,
      }}
    >
      <h3>{name}</h3>
      <small>{description}</small>
      <Button
        $size="md"
        $variant="github"
        iconLeft={<AiOutlineGithub />}
        onClick={() => window.open(html_url)}
      >
        Ver repositório no GitHub
      </Button>
    </motion.div>
  );
}
