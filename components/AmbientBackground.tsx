export default function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(230,192,143,0.08),transparent_60%)] blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(220,163,163,0.07),transparent_60%)] blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(120,90,60,0.1),transparent_60%)] blur-3xl" />
    </div>
  );
}
