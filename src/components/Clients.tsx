import Image from "next/image";
import { clients } from "@/lib/site";

export default function Clients() {
  return (
    <section id="clientes" className="border-y border-line/60 py-16">
      <div className="container-zyber">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-content/50">
          Marcas que confían en Zyber
        </p>

        <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={56}
                className="h-12 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
