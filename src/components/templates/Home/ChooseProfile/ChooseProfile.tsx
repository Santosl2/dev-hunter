import { Category, Seniority } from "@/components/molecules/ChooseProfile//";

export function ChooseProfile() {
  return (
    <section className="container mx-auto p-5">
      <div className="flex flex-col py-5">
        <h2 className="font-poppins text-xl md:text-4xl font-bold leading-[1.2] mb-5">
          O que você precisa?
        </h2>

        <Category />
        <hr />

        <Seniority />
      </div>
    </section>
  );
}
