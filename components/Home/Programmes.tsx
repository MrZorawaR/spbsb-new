import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";

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
    <section className="pt-10 pb-30 bg-warm" aria-labelledby="programmes-heading">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="Academic Programmes" subTitle="Explore our comprehensive range of academic programmes designed to equip you with the knowledge, skills, and experience needed to excel in the dynamic world of business." />

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />

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
