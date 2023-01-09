import { motion } from "framer-motion";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

import {
  ChooseProfile,
  GoSearchDevelopers,
  Home,
  MissingData,
} from "@/components";
import { SEO } from "@/SEO";
import { getUserInfo } from "@/shared/utils/getUserInfo";
import { baseAnimationVariant } from "@/shared/variants";

export default function Page({
  hasPendingData = true,
}: {
  hasPendingData: boolean | undefined;
}) {
  return (
    <motion.article
      variants={baseAnimationVariant}
      animate="animate"
      exit="exit"
      initial="initial"
    >
      <SEO
        title="Home"
        description="Encontre os melhores perfis de desenvolvedores para a sua empresa"
      />
      <Home />
      <ChooseProfile />

      {hasPendingData && <MissingData />}
      <GoSearchDevelopers />
    </motion.article>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = await getSession({ req });

  if (session?.user?.name) {
    try {
      const data = await getUserInfo(session.user.name);

      const hasPendingData = data?.isPending ?? true;

      return {
        props: {
          hasPendingData,
        },
      };
    } catch {
      return {
        props: {
          hasPendingData: false,
        },
      };
    }
  }

  return {
    props: {
      hasPendingData: false,
    },
  };
}
