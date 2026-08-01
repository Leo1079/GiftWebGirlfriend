"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { story } from "@/content/story";
import { EASE } from "@/lib/motion";

export default function WhatILearned() {
  const { whatILearned } = story;

  return (
    <section
      id="lo-que-aprendi"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-8 md:py-36"
    >
      <SectionHeading kicker={whatILearned.kicker} title={whatILearned.title} />

      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="space-y-6">
          {whatILearned.lines.map((line, i) => (
            <motion.p
              key={i}
              className="border-l-2 border-gold/25 pl-5 text-base leading-relaxed text-cream/90 md:text-lg"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="glass relative overflow-hidden rounded-[2rem] p-9 md:p-12">
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(220,163,163,0.15),transparent_60%)] blur-2xl" />
            <p className="font-display relative text-2xl font-medium italic leading-snug text-cream md:text-3xl">
              {whatILearned.highlight}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
