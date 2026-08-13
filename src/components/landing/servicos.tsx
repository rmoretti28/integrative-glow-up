import { Leaf, Sparkles, HeartHandshake } from "lucide-react";
import { whatsappUrl } from "@/lib/site-config";
import { Reveal } from "./reveal";

const servicos = [
  {
    icone: Leaf,
    titulo: "Consulta Nutricional",
    texto:
      "Avaliação completa de exames, história clínica e hábitos, com plano alimentar individualizado e ajustes ao longo do acompanhamento.",
    itens: ["Anamnese integrativa", "Plano alimentar personalizado", "Retornos guiados"],
  },
  {
    icone: Sparkles,
    titulo: "Sessões de Acupuntura",
    texto:
      "Aplicação de pontos específicos para dor, ciclo menstrual, ansiedade, sono e digestão, em um ambiente tranquilo e acolhedor.",
    itens: ["Diagnóstico energético", "Sessões de 50 minutos", "Auriculoterapia complementar"],
  },
  {
    icone: HeartHandshake,
    titulo: "Protocolos Integrativos",
    texto:
      "Programas de acompanhamento contínuo que combinam nutrição, acupuntura e fitoterapia chinesa para objetivos específicos.",
    itens: ["Fertilidade e SOP", "Menopausa serena", "Reequilíbrio metabólico"],
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Atendimento
          </p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Pilares do cuidado
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {servicos.map((servico, i) => (
            <Reveal key={servico.titulo} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-foreground/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft/70 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <servico.icone className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl">{servico.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {servico.texto}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {servico.itens.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Agendar minha Consulta
          </a>
        </Reveal>
      </div>
    </section>
  );
}
