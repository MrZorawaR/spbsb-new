import TheRanking from '@/components/TheRanking';
import HeroSection from '@/components/about/HeroSection';
import Recognitions from '@/components/about/Recognitions';
import VisionMission from '@/components/about/VisionMission';
import IdentitySection from '@/components/about/IdentitySection';
import LegacyTimeline from '@/components/about/LegacyTimeline';
import LeadershipSection from '@/components/about/LeadershipSection';

export const metadata = {
    title: "About SPBSB - Top PGDM Colleges in Panipat",
    description: "SPBSB Institute of Management offers AICTE approved PGDM programs with 24 LPA highest package, world-class faculty, and 95%+ placement rate. Apply now for 2026-28 batch.",
    alternates: {
        canonical: "https://spbsb.in/about/"
    }
};

export default function About() {
    return (
        <main>
            <HeroSection />

            {/* Spacer: pushes content below the fixed hero (100vh) */}
            <div className="h-screen" aria-hidden="true" />

            <div className="relative z-10 bg-white">
                <Recognitions />
                
                {/* Transitional Hero Img */}
                <div className="w-full h-full relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src="https://geetauniversity.edu.in/uploads/all/1968/8.webp" 
                        alt="Hero Img"
                        className="h-full w-full object-cover object-center" 
                        loading="lazy"
                        decoding="async" 
                    />
                </div>

                <VisionMission />
                <IdentitySection />
                <TheRanking />
                <LegacyTimeline />
                <LeadershipSection />
            </div>
        </main>
    );
}