import { FiArrowLeft } from "react-icons/fi";

import { motion } from "framer-motion";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

import { Developer, Repositories, LoadingResults, Button } from "@/components";
import { SEO } from "@/SEO";
import { User } from "@/shared/interfaces/user";
import { api } from "@/shared/services/api";
import { baseAnimationVariant } from "@/shared/variants";

export default function Page({ developer }: { developer: User }) {
  const router = useRouter();
  const { user } = router.query;

  if (router.isFallback) {
    return <LoadingResults />;
  }

  return (
    <motion.article
      variants={baseAnimationVariant}
      animate="animate"
      exit="exit"
      initial="initial"
    >
      <SEO
        title={`Perfil de ${user}`}
        description="Perfil de usuário do site do DevPleno."
      />

      <section className="container mx-auto p-5 flex gap-5 flex-col md:flex-row">
        <div className="h-full flex flex-col gap-2">
          <Button
            iconLeft={<FiArrowLeft />}
            $variant="green"
            onClick={() => router.back()}
          >
            Voltar
          </Button>
          <Developer developer={developer} index={1} />
        </div>
        <Repositories user="santosl2" />
      </section>
    </motion.article>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { user } = params;

  try {
    const { data } = await api.get(`/developers/${user}`);

    if (data.rows.login) {
      return {
        props: {
          developer: data.rows,
        },
        revalidate: 3600, // 1hora
      };
    }

    return {
      notFound: true,
    };
  } catch {
    return {
      props: {
        hasPendingData: false,
      },
    };
  }
}
