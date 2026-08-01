"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { story } from "@/content/story";

export default function AlwaysByMySide() {
  const { alwaysByMySide } = story;

  return (
    <section
      id="siempre-a-mi-par"
      className="relative mx-auto w-full max-w-4xl px-6 py-28 md:py-44"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(230,192,143,0.07),transparent_55%)]" />
      <SectionHeading
        kicker={alwaysByMySide.kicker}
        title={alwaysByMySide.title}
        center
      />

      <div className="space-y-7 text-center">
        {alwaysByMySide.lines.map((line, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="font-display text-2xl font-light leading-snug text-cream md:text-4xl">
              {line}
            </p>
          </Reveal>
        ))}
        <Reveal delay={0.25}>
          <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-3 pt-2">
            {alwaysByMySide.reasons.map((r, i) => (
              <span key={i} className="glass rounded-full px-5 py-2.5 text-sm text-mist md:text-base">
                {r}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            {alwaysByMySide.close}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-20 text-center">
        <p className="font-display text-4xl font-medium italic leading-tight text-gradient-gold md:text-6xl">
          {alwaysByMySide.highlight}
        </p>
      </Reveal>
    </section>
  );
}
