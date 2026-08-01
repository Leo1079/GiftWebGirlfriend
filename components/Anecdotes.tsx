"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { story } from "@/content/story";
import { EASE } from "@/lib/motion";

export default function Anecdotes() {
  const { anecdotes } = story;

  return (
    <section
      id="anedotas"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-8 md:py-36"
    >
      <SectionHeading kicker={anecdotes.kicker} title={anecdotes.title} />

      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-display text-2xl font-light italic leading-relaxed text-cream md:text-4xl">
          {anecdotes.intro}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-4">
        {anecdotes.items.map((item, i) => (
          <motion.div
            key={i}
            className="glass max-w-xs rounded-3xl p-6 md:p-7"
            initial={{ opacity: 0, y: 24, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: EASE }}
          >
            <p className="text-sm leading-relaxed text-cream/90 md:text-base">
              {item}
            </p>
          </motion.div>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-16 text-center">
        <p className="font-display text-xl italic text-gold md:text-2xl">
          {anecdotes.outro}
        </p>
      </Reveal>
    </section>
  );
}
