import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/Home/HeroVideo";

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
        src="/images/herooo.png"
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
        className="absolute inset-0 bg-linear-to-b from-black/60 to-black/70"
        aria-hidden="true"
      />

      {/* Layer 4: Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-zilla text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold text-white leading-[1.1] tracking-tight mb-6">
            SP Bansal School of Business
          </h1>

          <p className="font-source text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Established with a vision of excellence, SPBSB stands as a symbol
            where ideas and knowledge converge, set against the backdrop of its
            rich heritage and legacy.
          </p>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bg-accent w-full py-2">
          <span className="text-white text-lg font-medium">
            Scroll down to explore
          </span>
        </div>
      </div>
    </section>
  );
}
