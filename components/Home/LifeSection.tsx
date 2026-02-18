import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";

function ArrowIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={`w-4 h-4 ml-1.5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] group-hover:translate-x-1 ${className}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
            focusable="false"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}

export default function LifeSection() {
    return (
        <section
            aria-labelledby="life-heading"
            className="bg-white"
        >
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[300px] gap-0">

                    <div className="relative md:row-span-1 aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                        <Image
                            src="/images/student.webp"
                            alt="Faculty-led classroom session at SPBSB with industry professionals"
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-[1.03]"
                        />
                    </div>

                    <article className="bg-heading flex flex-col justify-end p-8 md:row-span-1">
                        <h3 className="font-zilla text-2xl font-bold text-white mb-2">
                            Recruiters @ SPBSB
                        </h3>
                        <p className="text-white/80 text-sm mb-5 max-w-xs leading-relaxed">
                            Discover leading recruiters who regularly hire SPBSB graduates
                            across diverse industries.
                        </p>
                        <Link
                            href="/corporate/placements"
                            className="group inline-flex items-center text-sm font-bold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Explore Recruiters at SPBSB
                            <ArrowIcon />
                        </Link>
                    </article>

                    <article className="relative md:row-span-2 aspect-[4/5] md:aspect-auto md:h-full overflow-hidden group">
                        <Image
                            src="/images/alumni.webp"
                            alt="SPBSB alumni networking at a professional event"
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] group-hover:scale-[1.03]"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                            aria-hidden="true"
                        />
                        <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                            <h3 className="font-zilla text-2xl font-bold text-white mb-2">
                                Alumni Community
                            </h3>
                            <p className="text-white/80 text-sm mb-5 max-w-xs leading-relaxed">
                                Engage with a strong alumni network fostering lifelong
                                connections and professional growth.
                            </p>
                            <Link
                                href="/alumni"
                                className="group inline-flex items-center text-sm font-semibold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Explore the SPBSB Alumni Network
                                <ArrowIcon />
                            </Link>
                        </div>
                    </article>

                    <article className="bg-cool flex flex-col justify-end p-8 md:row-span-1">
                        <h3 className="font-zilla text-2xl font-bold text-[#012E55] mb-2">
                            Student Clubs &amp; Committees
                        </h3>
                        <p className="text-gray-600 text-sm mb-5 max-w-xs leading-relaxed">
                            Join dynamic student-led initiatives fostering leadership,
                            collaboration, and creativity.
                        </p>
                        <Link
                            href="/student-life/clubs"
                            className="group inline-flex items-center text-sm font-semibold text-[#FF5F19] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5F19]"
                        >
                            Discover Student Clubs and Committees
                            <ArrowIcon />
                        </Link>
                    </article>

                    <article className="relative md:row-span-2 aspect-[4/5] md:aspect-auto md:h-full overflow-hidden group">
                        <Image
                            src="/images/corporate.webp"
                            alt="Students participating in corporate competitions at SPBSB"
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] group-hover:scale-[1.03]"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-warm p-8">
                            <h3 className="font-zilla text-2xl font-bold text-heading mb-2">
                                Corporate Competitions
                            </h3>
                            <p className="text-heading text-sm mb-5 max-w-xs leading-relaxed">
                                Participate in premier corporate case competitions that hone
                                analytical and leadership skills.
                            </p>
                            <Link
                                href="/student-life/co-curricular"
                                className="group inline-flex items-center text-sm font-semibold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Explore Corporate Competitions
                                <ArrowIcon />
                            </Link>
                        </div>
                    </article>

                    <article className="relative md:row-span-1 aspect-[4/3] md:aspect-auto md:h-full overflow-hidden group">
                        <Image
                            src="/images/research.webp"
                            alt="SPBSB faculty and scholars engaged in academic research"
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] group-hover:scale-[1.03]"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 via-black/55 via-black/40 to-transparent"
                            aria-hidden="true"
                        />
                        <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                            <h3 className="font-zilla text-2xl font-bold text-white mb-2">
                                Research &amp; Publications
                            </h3>
                            <p className="text-white/80 text-sm mb-5 max-w-xs leading-relaxed">
                                Explore impactful research and scholarly contributions by our
                                faculty and doctoral scholars.
                            </p>
                            <Link
                                href="/faculty/research"
                                className="group inline-flex items-center text-sm font-semibold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                View Research and Publications
                                <ArrowIcon />
                            </Link>
                        </div>
                    </article>

                    <article className="relative md:row-span-1 overflow-hidden group">
                        <div className="relative aspect-[4/3] md:aspect-auto md:h-full">

                            {/* Background Image */}
                            <Image
                                src="/images/campusLife.webp"
                                alt="Students attending an interactive lecture session at SPBSB"
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] group-hover:scale-[1.03]"
                            />

                            {/* Gradient Overlay for Contrast */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 via-black/55 via-black/40 to-transparent"
                                aria-hidden="true"
                            />

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                                <h3 className="font-zilla text-2xl font-bold text-white mb-2">
                                    Life at SPBSB
                                </h3>
                                <p className="text-white/80 text-sm mb-5 max-w-xs leading-relaxed">
                                    Experience immersive academics, extracurricular vibrancy, and
                                    transformative personal development.
                                </p>
                                <Link
                                    href="/student-life/extra-curricular"
                                    className="group inline-flex items-center text-sm font-semibold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Discover Student Life at SPBSB
                                    <ArrowIcon />
                                </Link>
                            </div>

                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}
