"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Photo from "./Photo";
import { story } from "@/content/story";
import { EASE } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.4 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

export default function Hero() {
  const { hero } = story;

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      <Photo
        src={hero.photo}
        alt="Nosotros"
        rounded={false}
        className="absolute inset-0"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/55 to-night" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,192,143,0.1),transparent_60%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 pb-28 pt-36 text-center"
      >
        <motion.p
          variants={item}
          className="text-sm uppercase tracking-[0.4em] text-gold/80"
        >
          {hero.badge}
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display mt-6 text-5xl font-light leading-tight text-cream md:text-7xl"
        >
          {hero.greeting}
        </motion.h1>
        <motion.h2
          variants={item}
          className="font-display mt-2 text-3xl font-light italic text-gold md:text-5xl"
        >
          {hero.title}
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-balance text-base leading-relaxed text-mist md:text-lg"
        >
          {hero.subtitle}
        </motion.p>
        <motion.a
          variants={item}
          href="#historia"
          className="group mt-12 inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/[0.04] px-7 py-3.5 text-sm text-cream backdrop-blur transition-colors hover:border-gold/40 hover:bg-gold/10"
        >
          {hero.cta}
          <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
        </motion.a>
      </motion.div>
    </section>
  );
}
