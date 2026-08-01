"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { story } from "@/content/story";

const HEARTS = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  x: (Math.random() - 0.5) * 560,
  y: (Math.random() - 0.5) * 560,
  s: 0.4 + Math.random() * 1.1,
  d: 1.6 + Math.random() * 1.4,
  delay: Math.random() * 0.3,
}));

export default function FinalQuestion() {
  const { finalQuestion } = story;
  const [show, setShow] = useState(false);

  return (
    <section
      id="final"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-32"
    >
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-8 bg-night/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative flex h-64 w-64 items-center justify-center">
              {HEARTS.map((h) => (                <motion.span
                  key={h.id}
                  className="absolute"
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], x: h.x, y: h.y, scale: h.s }}
                  transition={{ duration: h.d, delay: h.delay, ease: "easeOut" }}
                >
                  <Heart className="h-6 w-6 text-blush" fill="currentColor" strokeWidth={0} />
                </motion.span>
              ))}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 220, damping: 14 }}
              >
                <Heart className="h-24 w-24 text-gold" fill="currentColor" strokeWidth={0} />
              </motion.span>
            </div>
            <motion.p
              className="px-6 text-center font-display text-3xl font-medium italic text-cream md:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
            >
              {finalQuestion.response}
            </motion.p>
            <motion.p
              className="text-center text-sm tracking-[0.3em] text-mist"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              {finalQuestion.chapter} {finalQuestion.continues}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.span
        className="text-xs uppercase tracking-[0.4em] text-gold/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {finalQuestion.kicker}
      </motion.span>
      <motion.h2
        className="font-display mt-6 max-w-2xl text-center text-4xl font-light leading-tight text-cream md:text-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.9 }}
      >
        {finalQuestion.question}
      </motion.h2>
      <motion.p
        className="mt-6 text-center text-sm text-mist md:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        {finalQuestion.chapter}
      </motion.p>
      <motion.p
        className="font-display mt-1 text-center text-lg italic text-gold md:text-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        {finalQuestion.continues}
      </motion.p>
      <motion.button
        type="button"
        onClick={() => setShow(true)}
        className="mt-12 inline-flex items-center gap-2 rounded-full border border-blush/40 bg-blush/10 px-9 py-4 text-base font-medium text-cream backdrop-blur transition-colors hover:bg-blush/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        {finalQuestion.button}
        <Heart className="h-4 w-4 text-blush" fill="currentColor" strokeWidth={0} />
      </motion.button>
    </section>
  );
}
