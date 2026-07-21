"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Search, ChevronDown } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex h-[88px] w-full max-w-[1240px] items-center justify-between gap-4 rounded-full border pl-8 pr-3 transition-all duration-300",
          scrolled
            ? "border-line bg-bg/80 shadow-[0_16px_50px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl"
            : "border-line/50 bg-surface/25 backdrop-blur-md",
        )}
      >
        <Link href="/" aria-label="Zyber inicio" className="shrink-0">
          <Image
            src="/img/logos/zyberlogo.png"
            alt="Zyber"
            width={210}
            height={58}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <button className="flex items-center gap-1 text-[15px] font-medium text-content/85 transition-colors hover:text-primary-bright">
                  {link.label}
                  <ChevronDown
                    size={15}
                    className="transition-transform group-hover:rotate-180"
                  />
                </button>
                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <ul className="surface-neu overflow-hidden rounded-xl p-2">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-content/80 transition-colors hover:bg-surface-2 hover:text-primary-bright"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-content/85 transition-colors hover:text-primary-bright"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-content/85 transition-colors hover:text-primary-bright"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Acciones derecha */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSearch(true)}
            aria-label="Buscar"
            className="hidden h-12 w-12 items-center justify-center rounded-full text-content/80 transition-colors hover:text-primary-bright sm:flex"
          >
            <Search size={20} />
          </button>

          {/* Píldora de teléfono */}
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-3 rounded-full border border-line bg-bg-deep py-2 pl-2 pr-6 shadow-[var(--shadow-neu)] transition-shadow hover:shadow-[var(--shadow-neu-hover)] sm:flex"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              <Phone size={18} />
            </span>
            <span className="text-base font-semibold text-heading">
              {siteConfig.phoneDisplay}
            </span>
          </a>

          {/* Botón móvil */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-heading lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="mx-auto mt-3 max-w-[1200px] rounded-3xl border border-line bg-bg/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.flatMap((link) =>
              link.children
                ? [
                    <p
                      key={link.label}
                      className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-widest text-muted"
                    >
                      {link.label}
                    </p>,
                    ...link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-5 py-2.5 text-sm text-content/80 hover:bg-surface hover:text-primary-bright"
                      >
                        {child.label}
                      </Link>
                    )),
                  ]
                : [
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-3 text-base font-medium text-content hover:bg-surface hover:text-primary-bright"
                    >
                      {link.label}
                    </Link>,
                  ],
            )}
            <a
              href={siteConfig.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-primary px-5 py-3 text-center font-semibold text-white"
            >
              Cotiza ahora
            </a>
          </nav>
        </div>
      )}

      {/* Overlay de búsqueda */}
      {search && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-bg-deep/85 px-5 pt-32 backdrop-blur-sm"
          onClick={() => setSearch(false)}
        >
          <div
            className="w-full max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b-2 border-primary pb-3">
              <Search size={22} className="text-primary" />
              <input
                autoFocus
                type="search"
                placeholder="Buscar en Zyber..."
                className="w-full bg-transparent text-lg text-heading outline-none placeholder:text-muted"
              />
              <button
                type="button"
                onClick={() => setSearch(false)}
                aria-label="Cerrar búsqueda"
                className="text-content/70 hover:text-primary-bright"
              >
                <X size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
