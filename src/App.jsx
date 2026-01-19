import { useState } from "react";
import Hero from "./components/Hero";
import SensiGenerator from "./components/SensiGenerator";
import PremiumSensi from "./components/PremiumSensi";
import Upgrade from "./components/Upgrade";
import UpiPayment from "./components/UpiPayment";
export default function App() {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <div className="min-h-screen bg-dark">
      <Hero />
      <SensiGenerator />
      <PremiumSensi isPremium={isPremium} />
      <Upgrade unlock={() => setIsPremium(true)} />
        <UpiPayment onPaid={() => setIsPremium(true)} />
    </div>
  );
}
