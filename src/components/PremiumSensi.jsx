import { useState } from "react";
import { generatePremiumSensi } from "../utils/premiumLogic";

export default function PremiumSensi({ isPremium }) {
  const [result, setResult] = useState(null);

  function generate() {
    const sensi = generatePremiumSensi({
      device: "Android",
      ram: 8,
      fps: "High",
      screen: 6.6,
    });
    setResult(sensi);
  }

  if (!isPremium) {
    return (
      <div className="max-w-xl mx-auto mt-20 p-6 bg-black/60 rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-fire">Premium Locked 🔒</h2>
        <p className="text-gray-400 mt-3">
          Unlock ultra headshot sensi, emote cancel & pro aim logic.
        </p>
        <a
          href="#upgrade"
          className="inline-block mt-5 px-6 py-3 bg-fire rounded-xl font-semibold"
        >
          💎 Upgrade to Premium
        </a>
      </div>
    );
  }

  return (
    <section className="max-w-xl mx-auto mt-20 p-6 bg-black/60 rounded-2xl">
      <h2 className="text-2xl font-bold text-neon text-center mb-4">
        Premium Sensi 🔥
      </h2>

      <button
        onClick={generate}
        className="w-full py-3 bg-neon text-black rounded-xl font-semibold"
      >
        ⚡ Generate Premium Sensi
      </button>

      {result && (
        <div className="mt-5 text-sm space-y-1">
          <p>🎯 General: {result.general}</p>
          <p>🔴 Red Dot: {result.redDot}</p>
          <p>🔍 2x Scope: {result.scope2x}</p>
          <p>🔭 4x Scope: {result.scope4x}</p>
          <p>🎯 Sniper: {result.sniper}</p>
          <p>🕺 Emote Cancel: {result.emoteCancel}</p>
          <p>🚀 Aim Assist: {result.aimAssistBoost}</p>
        </div>
      )}
    </section>
  );
}
