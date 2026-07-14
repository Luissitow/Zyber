"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-zyber flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Zyber inicio">
          <Image
            src="/img/logos/zyberlogo.png"
            alt="Zyber"
            width={132}
            height={36}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Nav escritorio */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-content/80 transition-colors hover:text-primary-bright"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-content/80 transition-colors hover:text-primary-bright"
          >
            <Phone size={16} className="text-primary" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,151,167,0.7)] transition-all hover:bg-primary-bright hover:shadow-[0_10px_28px_-6px_rgba(0,151,167,0.9)]"
          >
            Cotiza ahora
          </a>
        </div>

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

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-md lg:hidden">
          <nav className="container-zyber flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-content transition-colors hover:bg-surface hover:text-primary-bright"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-white"
            >
              Cotiza ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
