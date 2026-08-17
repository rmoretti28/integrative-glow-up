import { Instagram, Mail, MapPin, Clock } from "lucide-react";
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
            target="_blank"
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
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                {siteConfig.email}
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
            target="_blank"
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
