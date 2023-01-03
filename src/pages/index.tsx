import { ChooseProfile, Home } from "@/components";
import { SEO } from "@/SEO";

export default function Page() {
  return (
    <>
      <SEO
        title="Home"
        description="Encontre os melhores perfis de desenvolvedores para a sua empresa"
      />
      <Home />
      <ChooseProfile />
    </>
  );
}
