"use client";

import Image from "next/image";

export function Home() {
  return (
    <section className="mt-7 flex gap-5 justify-between items-center">
      <div>
        <h1 className="font-poppins text-5xl font-bold leading-[1.2]">
          Encontre{" "}
          <span className="text-green-400 underline">desenvolvedores</span>{" "}
          <br /> que <span className="text-green-400 underline">combinam</span>{" "}
          <br /> com sua empresa{" "}
        </h1>
        <p className="font-poppins text-md mt-5">
          Ajudamos empresas a encontrarem desenvolvedores que combinam <br />{" "}
          com a cultura e os valores da empresa.
        </p>
      </div>

      <Image
        src="/assets/images/illustration.jpg"
        className="max-w-xl rounded shadow-sm"
        alt="Desenvolvedores trabalhando"
        width={1200}
        height={1200}
        quality={100}
      />
    </section>
  );
}
