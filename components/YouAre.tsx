"use client";

import { motion, type Variants } from "framer-motion";
import { Heart } from "lucide-react";
import Reveal from "./Reveal";
import { story } from "@/content/story";
import { EASE } from "@/lib/motion";

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

const titleContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function YouAre() {
  const { youAre } = story;
  const words = youAre.big.split(" ");

  return (
    <section
      id="lo-que-sos-para-mi"
      className="relative overflow-hidden px-6 py-32 md:py-48"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,192,143,0.12),transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.span
          className="text-xs uppercase tracking-[0.4em] text-gold/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {youAre.kicker}
        </motion.span>

        <motion.h2
          className="font-display mt-6 flex flex-wrap items-center justify-center gap-x-4 text-5xl font-medium leading-tight text-cream md:text-7xl"
          variants={titleContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {words.map((w, i) => (
            <motion.span key={i} variants={wordVariants}>
              {w}
            </motion.span>
          ))}
        </motion.h2>

        <motion.span
          className="mt-8 inline-flex"
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
        >
          <Heart className="h-10 w-10 text-blush" fill="currentColor" strokeWidth={0} />
        </motion.span>

        <div className="mt-12 space-y-5">
          {youAre.lines.map((line, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <p className="font-display text-xl font-light italic text-cream/90 md:text-2xl">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
          {youAre.feelings.map((f, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl px-6 py-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
            >
              <p className="font-display text-lg italic text-cream md:text-xl">
                {f}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
