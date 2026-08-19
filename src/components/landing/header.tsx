import { useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export const navLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Abordagem", href: "/#abordagem" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 px-5 py-3.5 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link
          to="/"
          className="font-serif text-lg tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {siteConfig.nome}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center rounded-full p-2 text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <Instagram size={22} />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
          >
            Agendar Consulta
          </a>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            className="inline-flex items-center justify-center rounded-full p-2 text-foreground transition-colors hover:bg-primary/10 hover:text-primary lg:hidden"
          >
            {aberto ? <Menu size={22} className="hidden" /> : null}
            {aberto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {aberto ? (
        <nav
          className="mx-auto mt-3 max-w-6xl border-t border-border/60 pt-3 lg:hidden"
          aria-label="Navegação principal (mobile)"
        >
          <ul className="grid gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground sm:hidden"
              >
                Agendar Consulta
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
