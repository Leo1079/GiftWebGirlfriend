"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { story } from "@/content/story";
import { EASE } from "@/lib/motion";

const START = new Date(story.anniversary.date);

function getDiff(now: Date) {
  let years = now.getFullYear() - START.getFullYear();
  let months = now.getMonth() - START.getMonth();
  let days = now.getDate() - START.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let hours = now.getHours() - START.getHours();
  let minutes = now.getMinutes() - START.getMinutes();
  let seconds = now.getSeconds() - START.getSeconds();

  if (seconds < 0) {
    minutes -= 1;
    seconds += 60;
  }
  if (minutes < 0) {
    hours -= 1;
    minutes += 60;
  }
  if (hours < 0) {
    days -= 1;
    hours += 24;
  }

  return { years, months, days, hours, minutes, seconds };
}

export default function DateCounter() {
  const { dateSection } = story;
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = now ? getDiff(now) : null;
  const values = [
    { label: dateSection.labels[0], value: diff?.years },
    { label: dateSection.labels[1], value: diff?.months },
    { label: dateSection.labels[2], value: diff?.days },
    { label: dateSection.labels[3], value: diff?.hours },
    { label: dateSection.labels[4], value: diff?.minutes },
    { label: dateSection.labels[5], value: diff?.seconds },
  ];

  return (
    <section
      id="nuestra-fecha"
      className="relative mx-auto w-full max-w-5xl px-6 py-24 md:px-8 md:py-36"
    >
      <SectionHeading kicker={dateSection.kicker} title={dateSection.title} />

      <div className="mx-auto max-w-2xl text-center">
        <p className="font-display text-6xl font-medium tracking-wide text-gradient-gold md:text-8xl">
          {story.anniversary.display}
        </p>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-3 sm:grid-cols-6 md:gap-4">
        {values.map((v, i) => (
          <motion.div
            key={v.label}
            className="glass rounded-2xl p-4 text-center md:rounded-3xl md:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
          >
            <span className="font-display block text-3xl text-cream tabular-nums md:text-5xl">
              {v.value === undefined ? "00" : String(v.value).padStart(2, "0")}
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-mist md:mt-2 md:text-xs">
              {v.label}
            </span>
          </motion.div>
        ))}
      </div>

      <Reveal delay={0.2} className="mx-auto mt-16 max-w-xl text-center">
        <p className="font-display text-xl font-light italic leading-relaxed text-cream/85 md:text-2xl">
          {dateSection.note}
        </p>
      </Reveal>
    </section>
  );
}
