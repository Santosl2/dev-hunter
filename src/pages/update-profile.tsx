import { motion } from "framer-motion";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

import { UpdateProfile } from "@/components";
import { SEO } from "@/SEO";
import { baseAnimationVariant } from "@/shared/variants";

export default function Update() {
  return (
    <motion.article
      variants={baseAnimationVariant}
      animate="animate"
      exit="exit"
      initial="initial"
    >
      <SEO
        title="Atualizar perfil"
        description="Os melhores perfis de desenvolvedores para a sua empresa você encontra aqui!"
      />
      <UpdateProfile />
    </motion.article>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = await getSession({ req });
  const user = session?.user?.name;

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
