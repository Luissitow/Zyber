import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { clients } from "@/lib/site";

export default function Clients() {
  return (
    <section id="clientes" className="border-y border-line/60 py-16">
      <Container>
        <Reveal animation="up">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-content/50">
            Marcas que confían en Zyber
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, i) => (
            <Reveal key={client.name} animation="up" delay={i * 70} className="flex justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={56}
                title={client.name}
                className="h-12 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
