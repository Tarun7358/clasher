export function generateSensi({ device, ram, fps, screen }) {
  let base = 90;

  // RAM logic
  if (ram <= 3) base -= 15;
  else if (ram <= 4) base -= 10;
  else if (ram >= 8) base += 10;

  // FPS logic
  if (fps === "Low") base -= 10;
  if (fps === "High") base += 10;

  // Screen size logic
  if (screen < 6) base -= 5;
  if (screen > 6.5) base += 5;

  // Emulator tweak
  if (device === "PC") base -= 15;

  return {
    general: clamp(base),
    redDot: clamp(base + 5),
    scope2x: clamp(base - 5),
    scope4x: clamp(base - 10),
    sniper: clamp(base - 15),
  };
}

function clamp(value) {
  return Math.max(10, Math.min(100, Math.round(value)));
}
