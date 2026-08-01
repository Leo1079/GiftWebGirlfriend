"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Photo({
  src,
  alt,
  className = "",
  sizes,
  priority,
  rounded = true,
  label = "tu foto aquí",
}: {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: boolean;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div
      className={`overflow-hidden bg-gradient-to-br from-stone-700/50 via-stone-800/70 to-[#2a1a14] ${
        rounded ? "rounded-3xl" : ""
      } ${className}`}
    >
      {showPlaceholder ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-stone-400">
          <Heart className="h-8 w-8 text-amber-100/30" strokeWidth={1.25} />
          <span className="px-4 text-center text-[10px] uppercase tracking-[0.25em] text-stone-500">
            {label}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className="object-cover"
        />
      )}
    </div>
  );
}
