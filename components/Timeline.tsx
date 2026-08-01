"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { story } from "@/content/story";
import { EASE } from "@/lib/motion";

export default function Timeline() {
  const { timeline } = story;

  return (
    <section
      id="historia"
      className="relative mx-auto w-full max-w-5xl px-6 py-24 md:px-8 md:py-36"
    >
      <SectionHeading kicker={timeline.kicker} title={timeline.title} />

      <div className="relative">
        <div className="absolute bottom-4 left-5 top-2 w-px bg-gradient-to-b from-gold/15 via-gold/40 to-blush/40 md:left-1/2" />
        <motion.div
          className="absolute bottom-4 left-5 top-2 w-px origin-top bg-gradient-to-b from-gold via-gold/70 to-blush md:left-1/2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.6, ease: EASE }}
        />

        <div className="space-y-16">
          {timeline.steps.map((step, i) => {
            const right = i % 2 !== 0;
            return (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              >
                <span className="absolute left-5 top-2 h-3 w-3 -translate-x-1/2 rounded-full border border-gold/70 bg-night md:left-1/2" />
                <div className="pl-14 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                  <div
                    className={`${right ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}
                  >
                    <div className="glass rounded-3xl p-7 md:p-9">
                      <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold/80">
                        {step.date}
                      </span>
                      <h3 className="font-display mt-3 text-2xl font-medium text-cream md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-mist md:text-base">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Reveal delay={0.1} className="mt-24 text-center">
        <p className="text-sm tracking-[0.3em] text-mist">
          {timeline.transitionLine}
        </p>
        <p className="font-display mt-3 text-5xl font-medium text-gold md:text-7xl">
          {timeline.transitionDate}
        </p>
        <p className="mt-4 text-mist">{timeline.transitionAfter}</p>
      </Reveal>
    </section>
  );
}
