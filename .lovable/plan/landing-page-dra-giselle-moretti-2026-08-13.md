# Landing page — Dra. Giselle Moretti

Landing page única (rota `/`), em português, mobile-first, para nutricionista clínica com foco em Medicina Tradicional Chinesa e acupuntura, voltada ao público feminino.

## Identidade visual

- Paleta: verde sálvia (cor principal), bege/areia, off-white de fundo, rosa chá como acento sutil, texto em marrom-esverdeado escuro.
- Tipografia: Playfair Display (títulos, serifada) + Inter (texto), carregadas via Google Fonts no head da raiz.
- Sensação: minimalista, muito espaço em branco, cantos suaves, sombras leves.

## Seções (na ordem)

1. **Hero** — título "Nutrição e Medicina Chinesa para a Saúde da Mulher", subtítulo sobre a abordagem integrativa, CTA em destaque "Agendar minha Consulta" (leva ao WhatsApp), imagem/textura orgânica de fundo suave.
2. **Sobre a profissional** — duas colunas: foto em formato redondo/orgânico (imagem gerada como placeholder editorial) + texto sobre formação em Nutrição, expertise em Acupuntura/MTC e propósito.
3. **A abordagem** — bloco visual explicando dietoterapia chinesa + nutrição ocidental, com destaque para SOP, menopausa, ansiedade, fertilidade e emagrecimento.
4. **Serviços** — grid de 3 cards com hover suave: Consulta Nutricional, Sessões de Acupuntura, Protocolos Integrativos.
5. **Depoimentos** — carrossel simples com relatos de pacientes (conteúdo de exemplo, fácil de substituir).
6. **Rodapé/Contato** — informações de atendimento, link do Instagram, e-mail; botão flutuante de WhatsApp fixo no canto inferior direito em toda a página.

## Detalhes técnicos

- Rota: reescrever `src/routes/index.tsx` com `head()` próprio (title, description, og/twitter em português).
- Componentes modulares em `src/components/landing/` (Hero, Sobre, Abordagem, Servicos, Depoimentos, Footer, WhatsAppButton).
- Tokens de cor/fonte definidos em `src/styles.css` (`@theme inline`, oklch) — nada de cores fixas nos componentes.
- Animações com Framer Motion (`motion`): fade-in/slide-up ao entrar na viewport, com `viewport={{ once: true }}`.
- Carrossel: componente shadcn `carousel` (embla) já disponível ou adicionado se necessário.
- Imagens geradas para hero e retrato, salvas em `src/assets/` e importadas por ES module, com `alt` descritivo.
- Sem backend: links de WhatsApp/Instagram são placeholders fáceis de trocar (número e @ definidos em um arquivo de config).
