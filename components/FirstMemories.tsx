"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Photo from "./Photo";
import { story } from "@/content/story";
import { EASE } from "@/lib/motion";

export default function FirstMemories() {
  const { firstMemories } = story;

  return (
    <section
      id="recuerdos"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-8 md:py-36"
    >
      <SectionHeading kicker={firstMemories.kicker} title={firstMemories.title} />

      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
        <Reveal className="md:sticky md:top-24">
          <Photo
            src={firstMemories.photo}
            alt={firstMemories.photoAlt}
            className="relative aspect-[4/5] w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>

        <div className="space-y-8">
          {firstMemories.blocks.map((block, i) => (
            <motion.div
              key={i}
              className="glass rounded-3xl p-8 md:p-10"
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-gold/70">
                {block.kicker}
              </span>
              <p className="font-display mt-4 text-2xl font-medium italic leading-snug text-cream md:text-3xl">
                {block.text}
              </p>
              {block.footer && (
                <p className="mt-5 text-sm leading-relaxed text-mist md:text-base">
                  {block.footer}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
