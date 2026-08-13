import { motion } from "motion/react";
import heroImg from "@/assets/hero.jpg";
import { whatsappUrl } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Nutrição clínica · Acupuntura · MTC
          </p>
          <h1 className="mt-5 text-4xl leading-[1.12] text-foreground sm:text-5xl md:text-6xl">
            Nutrição e Medicina Chinesa para a Saúde da Mulher
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Uma abordagem integrativa que une a ciência da nutrição à sabedoria da
            Medicina Tradicional Chinesa para tratar a raiz dos seus sintomas e
            devolver o equilíbrio entre corpo, mente e energia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Agendar minha Consulta
            </a>
            <a
              href="#abordagem"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-background"
            >
              Conhecer a abordagem
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <img
            src={heroImg}
            width={1600}
            height={1200}
            alt="Chá verde, ervas secas e agulhas de acupuntura sobre tecido verde sálvia"
            className="w-full rounded-[2rem] object-cover shadow-xl shadow-foreground/5"
          />
        </motion.div>
      </div>
    </section>
  );
}
