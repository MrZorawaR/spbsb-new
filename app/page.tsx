import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import DeanSection from "@/components/DeanSection";
import Programmes from "@/components/Programmes";

export default function Home() {
  return (
    <>
      {/* Fixed hero — stays pinned behind everything */}
      <Hero />

      {/* Spacer: pushes content below the fixed hero (100vh) */}
      <div className="h-screen" aria-hidden="true" />

      {/* All sections below slide OVER the fixed hero */}
      <div className="relative z-10">
        <Stats />
        <DeanSection />
        <Programmes />
      </div>
    </>
  );
}
