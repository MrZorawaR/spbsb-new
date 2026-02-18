import Image from "next/image";
import VirtualTourButton from "./VirtualTourButton";

export default function VirtualTourSection() {
    return (
        <section
            aria-labelledby="virtual-tour-heading"
            className="relative flex items-center justify-center text-center text-white
                       h-[65vh] max-md:h-[38vh] overflow-hidden"
        >
            {/* Background image */}
            <Image
                src="https://geetauniversity.edu.in/themes/geetau/image/video.webp"
                alt="Aerial panoramic view of the SPBSB campus grounds and academic buildings"
                fill
                loading="lazy"
                sizes="100vw"
                className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-6">
                <h2
                    id="virtual-tour-heading"
                    className="sr-only"
                >
                    Explore the SPBSB Campus Virtually
                </h2>

                <VirtualTourButton />

                <p className="mt-5 text-2xl max-md:text-xl font-bold font-zilla drop-shadow-md">
                    Virtual Campus Tour
                </p>
                <p className="mt-2 text-sm text-white/80 font-source max-w-md leading-relaxed">
                    Take an interactive tour of our campus facilities, classrooms, and student spaces.
                </p>
            </div>
        </section>
    );
}
