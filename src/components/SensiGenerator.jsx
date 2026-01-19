import { useState } from "react";
import { generateSensi } from "../utils/sensiLogic";

export default function SensiGenerator() {
  const [form, setForm] = useState({
    device: "Android",
    ram: 4,
    fps: "Medium",
    screen: 6.4,
  });

  const [result, setResult] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function generate() {
    const sensi = generateSensi({
      ...form,
      ram: Number(form.ram),
      screen: Number(form.screen),
    });
    setResult(sensi);
  }

  function download() {
    const data = {
      brand: "CLASHER",
      type: "FREE SENSI",
      device: form,
      sensi: result,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CLASHER_FREE_SENSI.json";
    a.click();
  }

  return (
    <section className="max-w-xl mx-auto mt-20 p-6 bg-black/60 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-fire text-center mb-6">
        Free Sensi Generator
      </h2>

      <div className="space-y-4">
        <select name="device" onChange={handleChange} className="w-full p-3 rounded bg-dark">
          <option>Android</option>
          <option>iOS</option>
          <option>PC</option>
        </select>

        <select name="ram" onChange={handleChange} className="w-full p-3 rounded bg-dark">
          <option value="3">3 GB</option>
          <option value="4">4 GB</option>
          <option value="6">6 GB</option>
          <option value="8">8 GB</option>
          <option value="12">12 GB</option>
        </select>

        <select name="fps" onChange={handleChange} className="w-full p-3 rounded bg-dark">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="number"
          step="0.1"
          name="screen"
          placeholder="Screen size (inches)"
          onChange={handleChange}
          className="w-full p-3 rounded bg-dark"
        />

        <button
          onClick={generate}
          className="w-full py-3 bg-fire rounded-xl font-semibold hover:bg-red-600"
        >
          ⚡ Generate Sensi
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-dark p-4 rounded-xl text-sm space-y-1">
          <p>🎯 General: {result.general}</p>
          <p>🔴 Red Dot: {result.redDot}</p>
          <p>🔍 2x Scope: {result.scope2x}</p>
          <p>🔭 4x Scope: {result.scope4x}</p>
          <p>🎯 Sniper: {result.sniper}</p>

          <button
            onClick={download}
            className="mt-4 w-full py-2 border border-neon text-neon rounded-xl hover:bg-neon hover:text-black"
          >
            ⬇ Download
          </button>
        </div>
      )}
    </section>
  );
}
