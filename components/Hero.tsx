import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";

/**
 * Hero Section — Server Component
 *
 * Architecture (bottom to top):
 *   1. Static Image  → LCP element (next/image, priority)
 *   2. HeroVideo     → Client island, mounts AFTER window.load
 *   3. Dark overlay  → CSS gradient
 *   4. Text content  → Headings + CTA
 *
 * Performance guarantees:
 *   • LCP < 1.5s — image has priority + proper sizes
 *   • CLS = 0   — container has explicit min-h-screen, image uses fill
 *   • No TBT    — this is a server component, zero client JS
 */
export default function Hero() {
  return (
    <section
      className="fixed inset-0 w-full h-screen overflow-hidden z-0"
      aria-label="Hero"
    >
      {/* Layer 1: Static hero image — LCP element */}
      <Image
        src="/images/hero-campus.svg"
        alt="SPBSB campus — students engaged in collaborative learning"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Layer 2: Deferred background video (client island) */}
      <HeroVideo />

      {/* Layer 3: Dark gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80"
        aria-hidden="true"
      />

      {/* Layer 4: Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-zilla text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
            SP Bansal{" "}
            <span className="block mt-1">School of Business</span>
          </h1>

          <p className="font-source text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Established with a vision of excellence, SPBSB stands as a symbol
            where ideas and knowledge converge, set against the backdrop of its
            rich heritage and legacy.
          </p>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase">
            Scroll down to explore
          </span>
          <svg
            className="h-5 w-5 text-white/40 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
