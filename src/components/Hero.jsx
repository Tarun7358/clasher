export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-fire/20 via-transparent to-neon/10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest text-fire drop-shadow-[0_0_25px_rgba(255,46,46,0.8)]">
          CLASHER
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Built for <span className="text-neon font-semibold">Headshots</span>
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-xl bg-fire hover:bg-red-600 transition font-semibold">
            🔥 Generate Free Sensi
          </button>

          <button className="px-8 py-3 rounded-xl border border-neon text-neon hover:bg-neon hover:text-black transition font-semibold">
            💎 Go Premium
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-400">
          ✔ 100% Safe • ✔ No Ban Risk • ✔ Pro Logic
        </div>
      </div>
    </section>
  );
}
