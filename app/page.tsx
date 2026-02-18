import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats";
import DeanSection from "@/components/Home/DeanSection";
import Programmes from "@/components/Home/Programmes";
import LifeSection from "@/components/Home/LifeSection";

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
        <Programmes />
        <LifeSection />
      </div>
    </>
  );
}

