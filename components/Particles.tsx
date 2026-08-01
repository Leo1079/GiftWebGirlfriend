function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(20241112);

const DOTS = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${rand() * 100}%`,
  top: `${rand() * 100}%`,
  size: 1 + rand() * 2,
  duration: 9 + rand() * 16,
  delay: rand() * 14,
  opacity: 0.12 + rand() * 0.35,
}));

export default function Particles({ count = 22 }: { count?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {DOTS.slice(0, count).map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-amber-100"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animation: `twinkle ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
