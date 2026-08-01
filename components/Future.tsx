"use client";

import { motion } from "framer-motion";
import { Compass, Home, Plane, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { story } from "@/content/story";
import { EASE } from "@/lib/motion";

const icons = [Home, Plane, Compass, Sparkles];

export default function Future() {
  const { future } = story;

  return (
    <section
      id="nuestro-futuro"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-8 md:py-36"
    >
      <SectionHeading kicker={future.kicker} title={future.title} />

      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-display text-3xl font-light italic text-cream md:text-5xl">
          {future.intro}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {future.dreams.map((dream, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              className="glass flex flex-col items-center gap-4 rounded-3xl p-7 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
            >
              <Icon className="h-6 w-6 text-gold/80" strokeWidth={1.5} />
              <p className="text-sm leading-relaxed text-cream/90">{dream}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mx-auto mt-14 max-w-3xl space-y-6 text-center">
        {future.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <p className="text-base leading-relaxed text-mist md:text-lg">{p}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-20 text-center">
        <p className="font-display text-3xl font-medium italic leading-tight text-gradient-gold md:text-5xl">
          {future.highlight}
        </p>
      </Reveal>
    </section>
  );
}
