import { useState } from "react";
import Hero from "./components/Hero";
import SensiGenerator from "./components/SensiGenerator";
import PremiumSensi from "./components/PremiumSensi";
import Upgrade from "./components/Upgrade";

export default function App() {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center">
      <Hero />
      <div className="w-full max-w-4xl px-4">
        <SensiGenerator />
        <PremiumSensi isPremium={isPremium} />
        <Upgrade unlock={() => setIsPremium(true)} />
      </div>
    </div>
  );
}
