import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig, services, localPages } from "@/lib/site";

const socials = [
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-bg-deep">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/img/logos/zyberlogo.png"
              alt="Zyber"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-content/70">
              Impulsamos tu crecimiento digital con estrategia e innovación.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-content/70 transition-all hover:border-primary hover:text-primary-bright"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Enlaces">
            <FooterLink href="/#servicios">Servicios</FooterLink>
            <FooterLink href="/#proceso">Cómo trabajamos</FooterLink>
            <FooterLink href="/#planes">Planes</FooterLink>
            <FooterLink href="/portafolio">Portafolio</FooterLink>
          </FooterCol>

          <FooterCol title="Servicios">
            {services.slice(0, 5).map((s) => (
              <FooterLink key={s.slug} href={`/servicios/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Contacto">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="text-content/70 transition-colors hover:text-primary-bright"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-content/70 transition-colors hover:text-primary-bright"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-content/70 transition-colors hover:text-primary-bright"
              >
                WhatsApp
              </a>
            </li>
            {/* Zonas de cobertura en vez de domicilio: refuerza el SEO local
                sin declarar una oficina que no existe. Además son los únicos
                enlaces internos a las páginas locales: sin ellos Google las
                trata como huérfanas y les da mucho menos peso. */}
            <li className="pt-2 text-content/70">Cobertura</li>
            {localPages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/automatizacion/${page.slug}`}
                  className="text-content/70 transition-colors hover:text-primary-bright"
                >
                  Automatización en {page.city}
                </Link>
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-sm text-content/60 sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-primary-bright">
              Política de privacidad
            </Link>
            <Link href="#" className="transition-colors hover:text-primary-bright">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-heading">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-content/70 transition-colors hover:text-primary-bright"
      >
        {children}
      </Link>
    </li>
  );
}
