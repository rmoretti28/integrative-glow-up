import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/hero";
import { Sobre } from "@/components/landing/sobre";
import { Abordagem } from "@/components/landing/abordagem";
import { Servicos } from "@/components/landing/servicos";
import { Depoimentos } from "@/components/landing/depoimentos";
import { Rodape } from "@/components/landing/rodape";
import { WhatsappButton } from "@/components/landing/whatsapp-button";

const titulo = "Dra. Giselle Moretti — Nutrição e Medicina Chinesa para Mulheres";
const descricao =
  "Nutrição clínica integrativa, acupuntura e Medicina Tradicional Chinesa para a saúde da mulher: SOP, menopausa, fertilidade, ansiedade e emagrecimento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Dra. Giselle Moretti",
          description: descricao,
          medicalSpecialty: "Nutrition",
          areaServed: "Brasil",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Abordagem />
      <Servicos />
      <Depoimentos />
      <Rodape />
      <WhatsappButton />
    </main>
  );
}
