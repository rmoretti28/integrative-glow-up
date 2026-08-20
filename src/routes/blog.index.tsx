import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/landing/header";
import { Rodape } from "@/components/landing/rodape";
import { WhatsappButton } from "@/components/landing/whatsapp-button";
import { Reveal } from "@/components/landing/reveal";
import { blogPosts } from "@/lib/blog-posts";

const titulo = "Blog — Dra. Giselle Moretti | Nutrição e Medicina Chinesa";
const descricao =
  "Artigos sobre saúde da mulher, SOP, menopausa, fertilidade e dietoterapia chinesa escritos pela nutricionista Dra. Giselle Moretti.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main>
      <Header />
      <section className="px-5 pb-16 pt-14 sm:px-8 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Blog
            </p>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Conteúdo sobre saúde integrativa da mulher
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Textos práticos sobre nutrição clínica, dietoterapia chinesa e
              acupuntura — para você entender o que o seu corpo comunica.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08} className="h-full">
                <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-foreground/5">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">
                    {post.categoria}
                  </p>
                  <h2 className="mt-4 text-xl leading-snug">
                    <Link to="/blog/$slug" params={{ slug: post.slug }}>
                      {post.titulo}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.resumo}
                  </p>
                  <p className="mt-6 text-xs text-muted-foreground">
                    {post.dataLabel} · {post.leitura}
                  </p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="mt-4 text-sm font-medium text-primary transition-colors hover:underline"
                  >
                    Ler artigo →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Rodape />
      <WhatsappButton />
    </main>
  );
}
