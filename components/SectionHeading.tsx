import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  center = true,
  className = "",
}: {
  kicker?: string;
  title: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-14 md:mb-20 ${center ? "text-center" : ""} ${className}`}>
      {kicker && (
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold/70">
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="font-display mt-4 text-4xl font-medium leading-tight text-cream md:text-6xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <div
          className={`mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/60 to-transparent ${
            center ? "mx-auto" : ""
          }`}
        />
      </Reveal>
    </div>
  );
}
