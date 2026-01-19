export default function Upgrade({ unlock }) {
  return (
    <section
      id="upgrade"
      className="max-w-xl mx-auto mt-24 p-6 bg-gradient-to-br from-fire/30 to-black rounded-2xl text-center"
    >
      <h2 className="text-3xl font-bold text-fire">CLASHER PREMIUM</h2>

      <ul className="text-gray-300 mt-5 space-y-2 text-sm">
        <li>✅ Ultra Headshot Sensi</li>
        <li>✅ Android / iOS / PC Packs</li>
        <li>✅ Emote Cancel Timing</li>
        <li>✅ Network & FPS Optimizer</li>
        <li>✅ Lifetime Updates</li>
        <li>❌ No Ads</li>
      </ul>

      <div className="mt-6">
        <p className="text-xl font-bold text-neon">₹199 • Lifetime</p>

        {/* TEMP DEV UNLOCK */}
        <button
          onClick={unlock}
          className="mt-4 px-8 py-3 bg-neon text-black rounded-xl font-semibold"
        >
          🔓 Unlock Premium (DEV)
        </button>
      </div>
    </section>
  );
}
