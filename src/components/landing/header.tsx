import { siteConfig, whatsappUrl } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 px-5 py-3.5 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#"
          className="font-serif text-lg tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {siteConfig.nome}
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
}
