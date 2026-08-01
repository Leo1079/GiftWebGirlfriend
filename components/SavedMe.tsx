"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { story } from "@/content/story";

export default function SavedMe() {
  const { savedMe } = story;

  return (
    <section
      id="lo-que-nunca-te-dije"
      className="relative overflow-hidden px-6 py-28 md:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,192,143,0.1),rgba(220,163,163,0.04),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <SectionHeading kicker={savedMe.kicker} title={savedMe.title} center />

        <div className="space-y-8 text-center">
          {savedMe.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="mx-auto max-w-2xl text-base leading-loose text-cream/90 md:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-16 text-center">
          <div className="mx-auto max-w-2xl border-y border-gold/20 py-8">
            <p className="font-display text-2xl font-medium italic leading-snug text-gold md:text-3xl">
              {savedMe.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
