import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { siteConfig, services } from "@/lib/site";

const socialIcons = [
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="container-zyber py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Image
              src="/img/logos/zyberlogo.png"
              alt="Zyber"
              width={140}
              height={38}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-content/70">
              Impulsamos tu crecimiento digital con estrategia e innovación.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-heading">
              Enlaces
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/#servicios" className="text-content/70 transition-colors hover:text-primary-bright">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#proceso" className="text-content/70 transition-colors hover:text-primary-bright">
                  Cómo trabajamos
                </Link>
              </li>
              <li>
                <Link href="/#planes" className="text-content/70 transition-colors hover:text-primary-bright">
                  Planes
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-content/70 transition-colors hover:text-primary-bright"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-heading">
              Servicios
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/#servicios"
                    className="text-content/70 transition-colors hover:text-primary-bright"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto + redes */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-heading">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-content/70">
              <li>
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-primary-bright">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary-bright">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
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
      </div>
    </footer>
  );
}
