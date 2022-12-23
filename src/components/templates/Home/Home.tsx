"use client";

import Image from "next/image";

export function Home() {
  return (
    <section className="bg-green-200 p-9 lg:p-14 relative mb-5">
      <div className="container mx-auto flex gap-5 justify-between items-center flex-col lg:flex-row">
        <div>
          <h1 className="font-poppins text-xl md:text-5xl font-bold leading-[1.2]">
            Encontre{" "}
            <span className="text-green-400 underline">desenvolvedores</span>{" "}
            <br /> que{" "}
            <span className="text-green-400 underline">combinam</span> <br />{" "}
            com sua empresa{" "}
          </h1>
          <p className="font-poppins text-md mt-5">
            Ajudamos empresas a encontrarem desenvolvedores que combinam <br />{" "}
            com a cultura e os valores da empresa.
          </p>
        </div>

        <Image
          src="/assets/images/illustration.jpg"
          className="max-w-full lg:max-w-xl rounded shadow-md"
          alt="Desenvolvedores trabalhando"
          width={1200}
          height={1200}
          quality={100}
        />
      </div>
    </section>
  );
}
