export function generatePremiumSensi({ device, ram, fps, screen }) {
  let base = 95;

  // RAM optimization
  if (ram <= 4) base -= 10;
  else if (ram >= 8) base += 15;

  // FPS logic
  if (fps === "Low") base -= 10;
  if (fps === "High") base += 15;

  // Screen precision
  if (screen < 6) base -= 5;
  if (screen > 6.6) base += 10;

  // Emulator tuning
  if (device === "PC") base -= 10;

  return {
    general: clamp(base),
    redDot: clamp(base + 8),
    scope2x: clamp(base - 3),
    scope4x: clamp(base - 8),
    sniper: clamp(base - 12),
    emoteCancel: "Enabled",
    aimAssistBoost: "Pro Level",
  };
}

function clamp(v) {
  return Math.max(20, Math.min(100, Math.round(v)));
}
