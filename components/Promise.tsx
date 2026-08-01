"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { story } from "@/content/story";

export default function Promise() {
  const { promise } = story;

  return (
    <section
      id="mi-promesa"
      className="relative mx-auto w-full max-w-4xl px-6 py-24 md:px-8 md:py-36"
    >
      <SectionHeading kicker={promise.kicker} title={promise.title} center />

      <Reveal delay={0.1}>
        <div className="glass relative overflow-hidden rounded-[2rem] p-9 md:p-14">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(220,163,163,0.12),transparent_60%)] blur-2xl" />
          <div className="relative space-y-6">
            {promise.lines.map((line, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="font-display text-xl font-light leading-relaxed text-cream/95 md:text-2xl">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4} className="mt-10">
            <p className="font-display text-2xl font-medium italic text-gold md:text-3xl">
              {promise.closing}
            </p>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
