import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24">
      <Container>
        <SectionHeading
          label="Testimonios"
          title="Testimonios reales, resultados comprobados"
          description="Conoce cómo empresas como la tuya han logrado crecer con Zyber."
        />

        {/* Columnas tipo masonry: manejan bien los testimonios de distinto largo */}
        <div className="mt-14 gap-6 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} animation="up" delay={(i % 3) * 90} className="mb-6 block break-inside-avoid">
              <Card className="p-6">
                <Quote size={28} className="text-primary/70" />
                <p className="mt-4 text-[15px] leading-relaxed text-content/85">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  {t.logo && (
                    <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-surface-2 ring-1 ring-line">
                      <Image
                        src={t.logo}
                        alt={t.author}
                        width={36}
                        height={36}
                        className="h-8 w-8 object-contain"
                      />
                    </span>
                  )}
                  <div>
                    <p className="font-semibold text-heading">{t.author}</p>
                    <p className="text-sm text-content/60">{t.role}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
