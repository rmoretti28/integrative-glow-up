import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/landing/header";
import { Rodape } from "@/components/landing/rodape";
import { WhatsappButton } from "@/components/landing/whatsapp-button";
import { whatsappUrl } from "@/lib/site-config";
import { getPost } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Artigo não encontrado" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const titulo = `${post.titulo} — Dra. Giselle Moretti`;
    return {
      meta: [
        { title: titulo },
        { name: "description", content: post.resumo },
        { property: "og:title", content: titulo },
        { property: "og:description", content: post.resumo },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ArtigoNaoEncontrado,
  component: BlogPost,
});

function ArtigoNaoEncontrado() {
  return (
    <main>
      <Header />
      <section className="px-5 py-24 text-center sm:px-8">
        <h1 className="text-3xl">Artigo não encontrado</h1>
        <Link to="/blog" className="mt-6 inline-block text-primary hover:underline">
          Voltar para o blog
        </Link>
      </section>
      <Rodape />
    </main>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <main>
      <Header />
      <article className="px-5 pb-16 pt-14 sm:px-8 md:pt-20">
        <div className="mx-auto max-w-2xl">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">
            ← Blog
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-primary">
            {post.categoria}
          </p>
          <h1 className="mt-4 text-3xl leading-tight sm:text-4xl">{post.titulo}</h1>
          <p className="mt-4 text-xs text-muted-foreground">
            {post.dataLabel} · {post.leitura}
          </p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            {post.paragrafos.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-card p-8 text-center">
            <p className="text-base text-foreground">
              Quer aplicar isso ao seu caso, com acompanhamento individual?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Agendar minha Consulta
            </a>
          </div>
        </div>
      </article>
      <Rodape />
      <WhatsappButton />
    </main>
  );
}
