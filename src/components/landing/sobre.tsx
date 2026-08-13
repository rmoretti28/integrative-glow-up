import gisselleImg from "@/assets/giselle.jpg";
import { Reveal } from "./reveal";

export function Sobre() {
  return (
    <section id="sobre" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-20">
        <Reveal>
          <div className="relative mx-auto w-fit">
            <div className="absolute -inset-4 rounded-full bg-sage-soft/60" aria-hidden="true" />
            <img
              src={gisselleImg}
              width={1008}
              height={1200}
              loading="lazy"
              alt="Dra. Giselle Moretti, nutricionista clínica e acupunturista"
              className="relative aspect-square w-64 rounded-full object-cover object-top shadow-lg shadow-foreground/10 sm:w-80"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Sobre a profissional
          </p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Cuidado que enxerga você por inteiro
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Sou a Dra. Giselle Moretti, nutricionista clínica com especialização
              em Medicina Tradicional Chinesa e Acupuntura. Ao longo da minha
              formação, percebi que muitas mulheres recebiam respostas parciais
              para questões que envolviam corpo, emoções e ritmo de vida.
            </p>
            <p>
              Desde então, dedico minha prática a unir a evidência da nutrição
              ocidental ao olhar energético da MTC — investigando padrões, ciclos e
              histórias antes de propor qualquer plano alimentar.
            </p>
            <p>
              Meu propósito é simples: acompanhar cada mulher para que ela alcance a
              melhor versão de si mesma, com leveza, constância e sem dietas
              punitivas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
