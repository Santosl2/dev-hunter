import { useMemo } from "react";

import { Badge } from "flowbite-react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";

import {
  Contract,
  Mobility,
  Skills,
  SocialMediaButtons,
} from "@/components/atoms";
import { SENIORITIES } from "@/shared/constants/seniorities";

import { DeveloperProps } from "./Developer.types";

const BADGE_COLORS = {
  1: "success",
  2: "warning",
  3: "purple",
};

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export function Developer({ developer, index }: DeveloperProps) {
  const seniority = developer.seniority ?? 1;
  const router = useRouter();
  const color =
    BADGE_COLORS[seniority as keyof typeof BADGE_COLORS] ?? BADGE_COLORS[1];

  const seniorityTitle = useMemo(
    () => SENIORITIES.find(({ id }) => id === seniority)?.title,
    [seniority]
  );
  return (
    <motion.article
      className="flex flex-col gap-5 bg-white rounded-sm shadow-sm p-5 w-full max-w-full md:max-w-xs transition-all hover:shadow-md h-full cursor-pointer"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.2 * index,
      }}
      onClick={() =>
        router.push("/profile/[user]", `/profile/${developer.login}`)
      }
      data-testid="developer"
    >
      <header>
        <img
          src={developer.avatar_url}
          alt={`Foto de ${developer.name}`}
          className="rounded-full w-16 mb-5 mx-auto"
          data-testid="developer-avatar"
        />
        <h3>
          {developer.name} <Badge color={color}>{seniorityTitle}</Badge>
        </h3>
      </header>

      <footer className="flex gap-5 flex-col" data-testid="developer-footer">
        <Contract data={developer.contract_type} />
        <Mobility data={developer.mobility_type} />
        <Skills data={developer.skills} />

        <hr />

        <SocialMediaButtons
          github={developer.login}
          linkedin={developer.linkedin}
        />
      </footer>
    </motion.article>
  );
}
