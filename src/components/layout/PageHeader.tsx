import Link from "next/link";
import Container from "@/components/ui/Container";
import GradientText from "@/components/ui/GradientText";
import Reveal from "@/components/ui/Reveal";

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
};

/** Encabezado reutilizable para las páginas internas: título + breadcrumb. */
export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-line/60 pb-16 pt-36 sm:pt-40">
      <div className="glow-teal absolute left-1/2 top-0 h-[440px] w-[860px] -translate-x-1/2 opacity-80" />
      <Container className="relative text-center">
        <Reveal animation="up">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            <GradientText>{title}</GradientText>
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal animation="up" delay={100}>
            <p className="mx-auto mt-4 max-w-2xl text-content/75">{subtitle}</p>
          </Reveal>
        )}

        <Reveal animation="up" delay={160}>
          <nav
            aria-label="Ruta de navegación"
            className="mt-7 flex items-center justify-center gap-2 text-sm text-content/60"
          >
            {breadcrumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-line">/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-primary-bright">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-primary-bright">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        </Reveal>
      </Container>
    </section>
  );
}
