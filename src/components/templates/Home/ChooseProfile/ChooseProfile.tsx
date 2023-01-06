import {
  Skills,
  Seniority,
  Mobility,
} from "@/components/molecules/ChooseProfile//";

export function ChooseProfile() {
  return (
    <section className="container mx-auto p-5">
      <div className="flex flex-col py-5">
        <h2 className="font-poppins text-xl md:text-4xl font-bold leading-[1.2] mb-5">
          O que você precisa?
        </h2>

        <Skills />

        <hr />

        <Seniority />

        <hr />

        <h2 className="font-poppins text-xl md:text-4xl font-bold leading-[1.2] my-5">
          E quanto a mobilidade?
        </h2>

        <Mobility />
      </div>
    </section>
  );
}
