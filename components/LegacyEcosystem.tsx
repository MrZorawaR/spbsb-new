import Image from "next/image";
import SectionHeading from "./SectionHeading";

const ecosystem = [
    {
        name: "Geeta University",
        description: "AI-enabled multidisciplinary campus",
        color: "#E85C2D",
        lightText: "text-orange-50",
    },
    {
        name: "Geeta Finishing School (GFS)",
        description: "Communication & Corporate Readiness",
        color: "#4D94FF",
        lightText: "text-blue-50",
    },
    {
        name: "Geeta Technical Hub (GTH)",
        description: "Advanced Technology, Certifications, and Industry Skills",
        color: "#4DB6AC",
        lightText: "text-teal-50",
    },
];

export default function LegacyEcosystem() {
    return (
        <section
            aria-labelledby="legacy-heading"
            className="py-20 bg-white"
        >
            <SectionHeading title="Legacy & Ecosystem" />

            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">

                    {/* Left content */}
                    <div className="md:col-span-7">
                        <p className="text-gray-600 text-lg font-source leading-relaxed max-w-3xl mb-8">
                            Founded in 1985, the{" "}
                            <span className="font-semibold text-heading">
                                Geeta Group of Institutions
                            </span>{" "}
                            has emerged as a major educational hub with institutions spanning
                            school education to doctoral programs. SPBSB benefits from the
                            integrated ecosystem of:
                        </p>

                        <div className="space-y-4">
                            {ecosystem.map((item) => (
                                <div key={item.name} className="flex items-stretch group">
                                    <div
                                        className="p-5 flex-grow rounded-lg shadow-sm
                                                   transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
                                                   group-hover:-translate-y-1 group-hover:shadow-md"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        <h3 className="text-xl font-bold font-zilla text-white mb-1">
                                            {item.name}
                                        </h3>
                                        <p className={`${item.lightText} font-medium font-source`}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div
                                        className="w-1.5 ml-2 rounded-full opacity-60
                                                   group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ backgroundColor: item.color }}
                                        aria-hidden="true"
                                    />
                                </div>
                            ))}
                        </div>

                        <p className="mt-10 text-gray-500 text-lg font-source font-medium leading-snug max-w-md">
                            Together, they form a holistic,
                            <br />
                            future-ready talent development ecosystem.
                        </p>
                    </div>

                    {/* Right image */}
                    <div className="md:col-span-5">
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="https://geetauniversity.edu.in/uploads/all/253/f-block-(1).webp"
                                alt="Aerial view of the Geeta Group campus buildings and facilities"
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
