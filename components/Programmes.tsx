import Image from "next/image";
import Link from "next/link";

const programmes = [
  {
    title: "MBA (2 yr)",
    image: "/images/mba-fulltime.svg",
    href: "/programmes/mba",
    alt: "MBA Full-Time students in a professional classroom discussion",
  },
  {
    title: "MBA with Apprenticeship",
    image: "/images/mba-executive-hca.svg",
    href: "/programmes/mba-executive-hca",
    alt: "MBA-Executive HCA working professionals in an evening lecture",
  },
  {
    title: "PhD",
    image: "/images/mba-executive.svg",
    href: "/programmes/mba-executive",
    alt: "PhD students in a professional classroom discussion",
  },
  {
    title: "Executive Learning Programs",
    image: "/images/mba-executive.svg",
    href: "/programmes/mba-executive",
    alt: "Executive Learning Programs for working professionals",
  },
];

export default function Programmes() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="programmes-heading">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading with View All link */}
        <div className="flex items-start justify-between mb-14">
          <h2
            id="programmes-heading"
            className="font-zilla text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-heading accent-line leading-tight"
          >
            Academic Programmes
          </h2>
          <Link
            href="/programmes"
            className="hidden sm:inline-flex items-center gap-2 text-accent font-semibold text-sm shrink-0 mt-2 hover:underline group"
          >
            <span className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-accent group-hover:bg-accent group-hover:text-white transition-colors">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            View All
          </Link>
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {programmes.map((prog) => (
            <Link
              key={prog.title}
              href={prog.href}
              className="programme-card group block"
            >
              <div className="relative h-72 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />

                {/* Title block at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-5 py-4 shadow-sm">
                    <div className="w-10 h-0.5 bg-accent mb-3" aria-hidden="true" />
                    <h3 className="font-zilla text-base md:text-lg font-bold text-heading leading-snug whitespace-pre-line">
                      {prog.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "View All" link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm"
          >
            View All Programmes
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
