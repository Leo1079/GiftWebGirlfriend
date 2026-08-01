"use client";

import { Heart } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { story } from "@/content/story";

export default function Letter() {
  const { letter } = story;

  return (
    <section
      id="carta"
      className="relative mx-auto w-full max-w-3xl px-6 py-28 md:py-40"
    >
      <SectionHeading kicker={letter.kicker} title={letter.title} center />

      <Reveal delay={0.1}>
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 md:p-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

          <p className="font-display text-3xl font-medium text-cream md:text-4xl">
            {letter.greeting}
          </p>
          <p className="font-display mt-2 text-lg italic text-gold">
            {letter.intro}
          </p>

          <div className="mt-10 space-y-7">
            {letter.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <p className="text-base leading-relaxed text-cream/90 md:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 border-l-2 border-blush/50 pl-6 md:pl-8">
              {letter.wish.map((line, i) => (
                <p
                  key={i}
                  className="font-display text-xl font-medium italic leading-relaxed text-cream md:text-2xl"
                >
                  {line}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 space-y-4">
            {letter.closing.map((line, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <p className="text-base font-medium leading-relaxed text-cream md:text-lg">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-14 flex flex-col items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blush/15 ring-1 ring-blush/40">
                <Heart className="h-7 w-7 text-blush" fill="currentColor" strokeWidth={0} />
              </span>
              <div className="text-center">
                {letter.signature.map((line, i) => (
                  <p key={i} className="font-display text-2xl italic text-gold md:text-3xl">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
