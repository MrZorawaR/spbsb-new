import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats";
import DeanSection from "@/components/Home/DeanSection";
import Programmes from "@/components/Home/Programmes";
import LifeSection from "@/components/Home/LifeSection";
import LOPSection from "@/components/LOPSection";
import VirtualTourSection from "@/components/Home/VirtualTourSection";
import TheRanking from "@/components/TheRanking";
import LegacyEcosystem from "@/components/LegacyEcosystem";

export default function Home() {
  return (
    <>
      {/* Fixed hero — stays pinned behind everything */}
      <Hero />

      {/* Spacer: pushes content below the fixed hero (100vh) */}
      <div className="h-screen" aria-hidden="true" />

      <div className="relative z-10">
        <Stats />
        <DeanSection />
        <VirtualTourSection />
        <Programmes />
        <LifeSection />
        <LOPSection />
        <TheRanking />
        <LegacyEcosystem />
      </div>
    </>
  );
}

