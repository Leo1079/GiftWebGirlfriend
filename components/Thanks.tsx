"use client";

import Reveal from "./Reveal";
import { story } from "@/content/story";

export default function Thanks() {
  const { thanks } = story;

  return (
    <section
      id="gracias"
      className="relative mx-auto w-full max-w-3xl px-6 py-28 md:py-40"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(230,192,143,0.08),transparent_60%)]" />

      <Reveal className="text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-gold/70">
          {thanks.kicker}
        </span>
        <h2 className="font-display mt-4 text-5xl font-medium text-cream md:text-7xl">
          {thanks.title}
        </h2>
      </Reveal>

      <div className="mt-12 space-y-7 text-center">
        {thanks.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <p className="text-base leading-relaxed text-cream/85 md:text-lg">
              {p}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-16 text-center">
        <p className="font-display text-3xl font-medium italic text-gradient-gold md:text-5xl">
          &ldquo;{thanks.highlight}&rdquo;
        </p>
      </Reveal>
    </section>
  );
}
