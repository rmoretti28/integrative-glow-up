import { Reveal } from "./reveal";

const temas = [
  {
    titulo: "SOMP e desequilíbrios hormonais",
    texto:
      "Regulação da resistência à insulina e do ciclo, com dietoterapia e pontos que harmonizam Fígado e Baço.",
  },
  {
    titulo: "Menopausa e climatério",
    texto:
      "Alívio de fogachos, insônia e oscilações de humor nutrindo o Yin e ajustando micronutrientes.",
  },
  {
    titulo: "Ansiedade e sono",
    texto:
      "Eixo intestino-cérebro, rotina alimentar e acupuntura para acalmar o Shen e restaurar a energia.",
  },
  {
    titulo: "Fertilidade",
    texto:
      "Preparação pré-concepcional que fortalece o Rim, o sangue e as reservas nutricionais.",
  },
  {
    titulo: "Emagrecimento sustentável",
    texto:
      "Retenção, compulsão e metabolismo tratados pela raiz — sem restrição extrema nem efeito sanfona.",
  },
  {
    titulo: "Digestão e inflamação",
    texto:
      "Inchaço, intestino preso e sensibilidades alimentares reequilibrados a partir do sistema digestivo.",
  },
];

export function Abordagem() {
  return (
    <section id="abordagem" className="bg-secondary/40 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            A abordagem
          </p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Por que unir MTC e Nutrição?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A nutrição ocidental traz exames, nutrientes e evidência. A dietoterapia
            chinesa traz a leitura energética de cada alimento e de cada sintoma.
            Juntas, elas deixam de silenciar sinais e passam a tratar a origem.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map((tema, i) => (
            <Reveal key={tema.titulo} delay={i * 0.06}>
              <div className="border-l border-border pl-5">
                <h3 className="text-lg text-foreground">{tema.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tema.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
