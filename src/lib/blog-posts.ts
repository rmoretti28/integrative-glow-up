export type BlogPost = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string; // ISO
  dataLabel: string;
  leitura: string;
  paragrafos: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sop-e-alimentacao",
    titulo: "SOP: como a alimentação e a MTC ajudam a regular o ciclo",
    resumo:
      "Resistência à insulina, inflamação e estagnação do Fígado: entenda o que está por trás dos sintomas da Síndrome dos Ovários Policísticos e o que muda no prato.",
    categoria: "Saúde hormonal",
    data: "2026-08-05",
    dataLabel: "5 de agosto de 2026",
    leitura: "5 min de leitura",
    paragrafos: [
      "A Síndrome dos Ovários Policísticos é uma das queixas mais frequentes no consultório. Ciclos irregulares, acne, queda de cabelo e dificuldade para emagrecer costumam vir juntos — e quase sempre existe um fio condutor: a resistência à insulina.",
      "Do ponto de vista da nutrição ocidental, o trabalho começa por estabilizar a glicemia. Isso significa refeições com proteína e fibras em todas as principais, redução de ultraprocessados e atenção a micronutrientes como inositol, vitamina D, magnésio e zinco.",
      "Na leitura da Medicina Tradicional Chinesa, a SOP costuma envolver estagnação do Qi do Fígado somada à umidade retida pelo Baço. Por isso, além do plano alimentar, priorizamos alimentos que movem e drenam, e pontos de acupuntura que harmonizam esses sistemas.",
      "A combinação das duas leituras evita o erro mais comum: tratar apenas o sintoma isolado. Quando o metabolismo e o fluxo energético voltam a funcionar juntos, o ciclo tende a se regularizar de forma consistente — e sem dietas punitivas.",
    ],
  },
  {
    slug: "menopausa-sem-sofrimento",
    titulo: "Menopausa com mais leveza: nutrir o Yin e dormir melhor",
    resumo:
      "Fogachos, insônia e oscilações de humor não precisam ser inevitáveis. Veja como ajustes alimentares e acupuntura acalmam o climatério.",
    categoria: "Climatério",
    data: "2026-07-22",
    dataLabel: "22 de julho de 2026",
    leitura: "4 min de leitura",
    paragrafos: [
      "O climatério é uma transição, não uma doença. Ainda assim, os sintomas podem ser intensos o suficiente para desorganizar o sono, o humor e a rotina de trabalho.",
      "Na MTC, muitos desses sinais são lidos como deficiência de Yin do Rim: calor que sobe, suor noturno, boca seca e agitação mental. A estratégia é nutrir — com alimentos umectantes, caldos, sementes, frutas de estação e horários regulares de refeição.",
      "Pelo lado nutricional, cuidamos da massa muscular, da saúde óssea e do perfil lipídico: proteína distribuída ao longo do dia, cálcio, vitamina D, ômega-3 e fitoestrógenos quando indicados.",
      "Somando as sessões de acupuntura, o objetivo é simples: menos ondas de calor, sono mais profundo e a sensação de voltar a habitar o próprio corpo com tranquilidade.",
    ],
  },
  {
    slug: "dietoterapia-chinesa-no-dia-a-dia",
    titulo: "Dietoterapia chinesa no dia a dia: temperatura, sabor e digestão",
    resumo:
      "Alimentos frios, quentes, secantes ou umidificantes — um guia prático para começar a escolher a comida também pelo efeito energético.",
    categoria: "Dietoterapia",
    data: "2026-07-08",
    dataLabel: "8 de julho de 2026",
    leitura: "6 min de leitura",
    paragrafos: [
      "Na Medicina Tradicional Chinesa, cada alimento carrega uma natureza térmica e um sabor que atuam sobre órgãos específicos. Não é misticismo: é uma forma de classificar efeitos observados no corpo há séculos.",
      "Se você acorda com inchaço, sente peso após as refeições e tem língua com saburra branca, provavelmente há umidade envolvida. Nesses casos, reduzimos laticínios, açúcar e crus em excesso, e aumentamos alimentos cozidos, mornos e levemente aromáticos.",
      "Já quem apresenta calor — irritabilidade, azia, pele reativa — se beneficia de alimentos mais refrescantes, como pepino, pera, hortelã e folhas verdes, sempre respeitando a força digestiva individual.",
      "A regra prática que mais funciona: comer quente, mastigar devagar, respeitar horários e evitar comer com pressa. Antes de qualquer suplemento, é o ritmo da refeição que reorganiza a digestão.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
