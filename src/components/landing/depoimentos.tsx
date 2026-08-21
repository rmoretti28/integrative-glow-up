import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "./reveal";

const depoimentos = [
  {
    nome: "Amanda R.",
    contexto: "Resistência Insulinica- 8 meses de acompanhamento",
    texto:
      "Ótima nutri, super atenciosa em cada detalhe! Olhou todos os meus exames e problemas de saúde para passar as fórmulas e plano personalizado. Já emagreci bastante e melhorei muito! Bem atualizada com assuntos da saúde da mulher. ",
  },
  {
    nome: "Andréia S.",
    contexto: "Emagrecimento saudável · 6 meses",
    texto:
      " Consulta com a nutri Giselle foi muita boa, tem toda uma avaliação, formulário a preencher antes da consulta, então o tratamento com as vitaminas, orientações são super direcionadas, com foco e orientação consegui perder peso. Super atenciosa ! Recomendo muito !",
  },
  {
    nome: "Daniela J. ",
    contexto: "Enxaqueca e perimenopausa - 4 meses ",
    texto:
      "A Gi é uma profissional ética, empática e responsável. Uma nutricionista atenciosa, humana e totalmente fora dos moldes engessados do mundo atual. Recomendo de olhos fechados.",
  },
  {
    nome: "Emília M .",
    contexto: "Acupuntura ",
    texto:
      "Maravilhosa !Atenta com as necessidades do paciente, sensível, acolhedora, profunda conhecedora do que faz. Estou muito feliz com os resultados de sua abordagem e pelo seu profissionalismo! ",
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-secondary/40 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Histórias reais
          </p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            O que as pacientes contam
          </h2>
          <a
            href="https://share.google/fHB837OMbF4a7s07y"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm shadow-sm shadow-foreground/5 transition-colors hover:bg-card/80"
          >
            <span className="font-medium text-foreground">5,0</span>
            <span aria-hidden className="text-primary">★★★★★</span>
            <span className="text-muted-foreground">Avaliações no Google</span>
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Carousel opts={{ loop: true, align: "start" }} className="px-2">
            <CarouselContent>
              {depoimentos.map((d) => (
                <CarouselItem key={d.nome} className="md:basis-1/2">
                  <blockquote className="flex h-full flex-col rounded-3xl bg-card p-8 shadow-sm shadow-foreground/5">
                    <p className="font-serif text-lg leading-relaxed text-foreground">
                      “{d.texto}”
                    </p>
                    <footer className="mt-6">
                      <p className="text-sm font-medium text-foreground">{d.nome}</p>
                      <p className="text-xs text-muted-foreground">{d.contexto}</p>
                    </footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 sm:-left-6" />
            <CarouselNext className="-right-1 sm:-right-6" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
