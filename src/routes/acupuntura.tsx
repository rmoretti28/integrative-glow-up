import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, Moon } from "lucide-react";
import { Header } from "@/components/landing/header";
import { Rodape } from "@/components/landing/rodape";
import { WhatsappButton } from "@/components/landing/whatsapp-button";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import acupunturaAsset from "@/assets/acupuntura.jpg.asset.json";

const titulo = "Acupuntura em Florianópolis — Dra. Giselle Moretti";
const descricao = "Conheça o atendimento de acupuntura da Dra. Giselle Moretti em Florianópolis: avaliação individualizada, cuidado integrativo e agendamento pelo WhatsApp.";
const url = "https://nutrigisellemoretti.com.br/acupuntura";

export const Route = createFileRoute("/acupuntura")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: AcupunturaPage,
});

function AcupunturaPage() {
  return (
    <main>
      <Header />
      <section className="bg-sage-soft/50 px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-sage">Dra. Giselle Moretti · Atendimento presencial em Florianópolis</p>
          <h1 className="mt-5 text-4xl leading-tight tracking-normal sm:text-5xl md:text-6xl">Acupuntura</h1>
          <p className="mt-5 max-w-2xl font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">Um cuidado atento ao seu corpo, ao seu ritmo e à sua saúde.</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">A Medicina Tradicional Chinesa olha para você de forma integral. As sessões de acupuntura são planejadas a partir dos seus sintomas, da sua história e das suas necessidades, em um atendimento individualizado e acolhedor.</p>
          <Button asChild size="lg" className="mt-8 h-auto min-h-12 whitespace-normal rounded-full py-3">
            <a href={whatsappUrl} target="_self" rel="noopener noreferrer">Agendar a sessão e tirar dúvidas <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 md:py-20" aria-labelledby="cuidado-acupuntura">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr] md:items-center md:gap-16">
          <img src={acupunturaAsset.url} alt="Dra. Giselle Moretti segurando uma agulha fina de acupuntura" width={768} height={1152} className="aspect-[2/3] w-full max-w-sm rounded-3xl object-cover" />
          <div>
            <p className="text-sm text-primary">Medicina Tradicional Chinesa</p>
            <h2 id="cuidado-acupuntura" className="mt-3 text-3xl leading-tight tracking-normal sm:text-4xl">Escuta, equilíbrio e cuidado individualizado</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">A acupuntura utiliza agulhas finas em pontos específicos do corpo. A escolha dos pontos e a condução de cada sessão são definidas após uma avaliação, respeitando suas condições de saúde e seu conforto.</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">Pode fazer parte de um acompanhamento integrativo para o manejo de sintomas e a promoção do bem-estar. A resposta ao tratamento varia de pessoa para pessoa; a avaliação orienta as possibilidades e os limites do cuidado.</p>
            <p className="mt-6 font-serif text-xl">{siteConfig.nome}</p>
            <p className="mt-1 text-sm text-muted-foreground">Nutrição clínica · Acupuntura · MTC</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-5 py-14 sm:px-8 md:py-20" aria-labelledby="sessoes-acupuntura">
        <div className="mx-auto max-w-6xl">
          <h2 id="sessoes-acupuntura" className="text-3xl tracking-normal sm:text-4xl">Como são as sessões</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Avaliação e escuta", "Conversamos sobre seus sintomas, histórico de saúde, sono, rotina e objetivos. Informe medicamentos em uso, gestação e tratamentos em andamento."],
              ["02", "Cuidado personalizado", "Os pontos são selecionados conforme a avaliação. Durante a aplicação, você pode comunicar qualquer desconforto para que a sessão seja ajustada."],
              ["03", "Acompanhamento", "A evolução dos sintomas e sua resposta às sessões orientam os próximos passos. Frequência e continuidade são combinadas individualmente."],
            ].map(([numero, nome, texto]) => (
              <li key={numero} className="border-t border-border pt-5">
                <span className="text-sm font-medium text-primary">{numero}</span>
                <h3 className="mt-3 text-xl tracking-normal">{nome}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 md:py-20" aria-labelledby="motivos-acupuntura">
        <div className="mx-auto max-w-6xl">
          <h2 id="motivos-acupuntura" className="text-3xl tracking-normal sm:text-4xl">O que podemos avaliar juntas</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Leaf, nome: "Dor e desconfortos", texto: "Queixas como tensão muscular e dores recorrentes, considerando a necessidade de avaliação médica e outras formas de cuidado." },
              { icon: Moon, nome: "Sono e bem-estar", texto: "Dificuldades de sono, estresse e sintomas de ansiedade, em uma abordagem complementar ao acompanhamento indicado." },
              { icon: Heart, nome: "Saúde da mulher", texto: "Desconfortos do ciclo menstrual, climatério e menopausa, com atenção à sua fase de vida e ao seu histórico." },
            ].map((item) => (
              <article key={item.nome} className="rounded-lg border border-border bg-card p-6">
                <item.icon className="h-6 w-6 text-sage" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 text-xl tracking-normal">{item.nome}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.texto}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">A acupuntura não substitui diagnóstico médico, medicações prescritas ou atendimento de urgência. Converse sobre suas dúvidas e condições de saúde antes de iniciar as sessões.</p>
          <div className="mt-10 flex flex-col items-start gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base text-foreground">Sessões presenciais em Florianópolis</p>
            <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal rounded-full py-3">
              <a href={whatsappUrl} target="_self" rel="noopener noreferrer">Agendar pelo WhatsApp <ArrowRight aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
      </section>
      <Rodape />
      <WhatsappButton />
    </main>
  );
}