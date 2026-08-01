"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { story } from "@/content/story";
import { EASE } from "@/lib/motion";

export default function WhatILove() {
  const { whatILove } = story;

  return (
    <section
      id="lo-que-amo"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-8 md:py-36"
    >
      <SectionHeading kicker={whatILove.kicker} title={whatILove.title} />

      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-14">
        {whatILove.words.map((word, i) => (
          <motion.span
            key={word}
            className="font-display text-6xl font-semibold text-gradient-gold md:text-8xl"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: EASE }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-16 text-center">
        <p className="font-display text-2xl italic text-cream md:text-3xl">
          {whatILove.intro}
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
        {whatILove.list.map((line, i) => (
          <motion.div
            key={i}
            className="glass flex items-center gap-4 rounded-2xl px-5 py-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.05, ease: EASE }}
          >
            <Heart
              className="h-4 w-4 shrink-0 text-blush"
              fill="currentColor"
              strokeWidth={0}
            />
            <p className="text-sm leading-relaxed text-cream/90 md:text-base">
              {line}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="glass relative mx-auto mt-20 max-w-3xl overflow-hidden rounded-[2rem] p-8 md:p-14">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(230,192,143,0.14),transparent_60%)] blur-2xl" />
        <Reveal>
          <p className="font-display text-2xl font-medium leading-snug text-cream md:text-4xl">
            {whatILove.affection.title}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-mist md:text-lg">
            {whatILove.affection.body}
          </p>
        </Reveal>
        <div className="mt-8 space-y-3">
          {whatILove.affection.close.map((line, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08}>
              <p className="font-display text-lg italic text-gold md:text-xl">
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
