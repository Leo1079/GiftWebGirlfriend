"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Photo from "./Photo";
import SectionHeading from "./SectionHeading";
import { story } from "@/content/story";
import type { GalleryItem } from "@/content/story";
import { EASE } from "@/lib/motion";

export default function PhotoGallery() {
  const { gallery } = story;
  const items: GalleryItem[] = gallery.photos;
  const [selected, setSelected] = useState<number | null>(null);

  const photoIndexes = useMemo(
    () =>
      items
        .map((item, i) => (item.type === "photo" ? i : -1))
        .filter((i) => i !== -1),
    [items],
  );

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(() => {
    setSelected((s) => {
      if (s === null) return s;
      const idx = photoIndexes.indexOf(s);
      return photoIndexes[(idx - 1 + photoIndexes.length) % photoIndexes.length];
    });
  }, [photoIndexes]);
  const next = useCallback(() => {
    setSelected((s) => {
      if (s === null) return s;
      const idx = photoIndexes.indexOf(s);
      return photoIndexes[(idx + 1) % photoIndexes.length];
    });
  }, [photoIndexes]);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, prev, next]);

  const currentPhoto =
    selected !== null && items[selected].type === "photo"
      ? (items[selected] as Extract<GalleryItem, { type: "photo" }>)
      : null;

  return (
    <section
      id="momentos"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 md:px-8 md:py-36"
    >
      <SectionHeading kicker={gallery.kicker} title={gallery.title} />
      <p className="-mt-8 mb-14 text-center text-sm text-mist md:-mt-10">
        {gallery.subtitle}
      </p>

      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="mb-4 break-inside-avoid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease: EASE }}
          >
            {item.type === "text" ? (
              <div className="glass flex min-h-40 items-center justify-center rounded-3xl p-6">
                <p className="font-display text-center text-lg italic leading-snug text-cream/90 md:text-xl">
                  {item.text}
                </p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setSelected(i)}
                className="group relative block w-full overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                <div
                  className={`relative w-full overflow-hidden rounded-3xl ${
                    item.aspect ?? "aspect-[4/5]"
                  }`}
                >
                  <Photo
                    src={item.src}
                    alt={item.alt}
                    rounded={false}
                    className="relative h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-night/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display text-sm italic text-cream">
                      {item.caption ?? item.alt}
                    </span>
                  </div>
                </div>
              </button>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {currentPhoto && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-night/95 p-4 backdrop-blur-sm md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-5 top-5 z-10 rounded-full bg-cream/10 p-3 text-cream transition-colors hover:bg-cream/20"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-3 z-10 rounded-full bg-cream/10 p-3 text-cream transition-colors hover:bg-cream/20 md:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-3 z-10 rounded-full bg-cream/10 p-3 text-cream transition-colors hover:bg-cream/20 md:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={selected}
              className="relative h-[80vh] w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <Photo
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                rounded={false}
                className="relative h-full w-full"
                sizes="90vw"
              />
              <p className="mt-4 text-center font-display italic text-cream/80">
                {currentPhoto.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
