import { Instagram, MapPin, Clock } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Reveal } from "./reveal";

export function Rodape() {
  return (
    <footer id="contato" className="px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="rounded-[2rem] bg-sage-soft/50 px-8 py-14 text-center">
          <h2 className="mx-auto max-w-xl text-3xl leading-tight sm:text-4xl">
            Vamos cuidar da sua saúde de forma integrativa?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Agende sua primeira consulta e descubra o que o seu corpo vem tentando
            comunicar.
          </p>
          <a
            href={whatsappUrl}
            target="_self"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Agendar minha Consulta
          </a>
        </Reveal>

        <div className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          <div>
            <p className="font-serif text-xl text-foreground">{siteConfig.nome}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Nutricionista clínica · Acupuntura e Medicina Tradicional Chinesa
            </p>
          </div>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.6} aria-hidden="true" />
              {siteConfig.endereco}
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.6} aria-hidden="true" />
              {siteConfig.horario}
            </li>
          </ul>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                {siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_self"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.38-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.26-1.38a9.86 9.86 0 0 0 4.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.35c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.2-8.25 8.2z" />
                </svg>
                {siteConfig.whatsappExibicao}
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.nome}. Todos os direitos reservados.
        </p>

        <div className="sticky bottom-0 mt-8 rounded-t-[2rem] border-t border-border/60 bg-background/95 px-5 py-4 text-center backdrop-blur-md">
          <a
            href={whatsappUrl}
            target="_self"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Agendar minha Consulta
          </a>
        </div>
      </div>
    </footer>
  );
}
