import SectionHeading from "./SectionHeading";

const phases = [
    {
        number: "01",
        title: "Profiling",
        color: "text-[#FF5F19]",
        barColor: "bg-[#FF5F19]",
        badgeBg: "bg-[#FF5F19]/10",
        items: [
            "Aptitude and reasoning tests",
            "Psychometrics & personality assessment",
            "ATS-optimized resume audit",
            "Interest mapping & SWOT analysis",
        ],
    },
    {
        number: "02",
        title: "Skill Blueprints",
        color: "text-[#1D70B8]",
        barColor: "bg-[#1D70B8]",
        badgeBg: "bg-[#1D70B8]/10",
        items: [
            "Customized skill modules",
            "Industry certifications (AWS, Cisco, EC-Council)",
            "Quarterly progress tracking",
        ],
    },
    {
        number: "03",
        title: "SWOT Odyssey Framework (SOF)",
        color: "text-[#D97706]",
        barColor: "bg-[#D97706]",
        badgeBg: "bg-[#D97706]/10",
        items: [
            "Strength alignment to roles",
            "Skill-gap bootcamps",
            "Market trend opportunity mapping",
            "Threat mitigation strategies",
        ],
    },
    {
        number: "04",
        title: "Career Acceleration (WTO)",
        color: "text-heading",
        barColor: "bg-heading",
        badgeBg: "bg-heading/10",
        items: [
            "Workplace Thrive Quotient",
            "Role-specific preparation",
            "Company culture & performance analysis",
            "Final placement readiness mapping",
        ],
    },
];

export default function LOPSection() {
    return (
        <section
            aria-labelledby="lop-heading"
            className="relative overflow-hidden py-20 bg-cool"
        >
            {/* Decorative blurs */}
            <div
                className="absolute top-0 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#FF5F19]/5 rounded-full blur-3xl"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-0 right-1/4 translate-y-1/2 w-80 h-80 bg-[#1D70B8]/5 rounded-full blur-3xl"
                aria-hidden="true"
            />

            <SectionHeading
                title="Leadership Odyssey Program (LOP)"
                subTitle="Individual Development Program (IDP) – Customized Career Plan"
            />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {phases.map((phase) => (
                        <article
                            key={phase.number}
                            className="group relative bg-white rounded-2xl border border-gray-100 p-7 flex gap-6
                                       shadow-sm hover:shadow-xl hover:-translate-y-1
                                       transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
                        >
                            {/* Phase indicator */}
                            <div className="flex flex-col items-center shrink-0">
                                <div className={`${phase.badgeBg} rounded-xl px-3 py-2 flex flex-col items-center`}>
                                    <span className={`text-[10px] font-bold tracking-widest uppercase ${phase.color}`}>
                                        Phase
                                    </span>
                                    <span className={`text-3xl font-bold leading-none ${phase.color}`}>
                                        {phase.number}
                                    </span>
                                </div>
                                <span
                                    className={`w-0.5 flex-1 mt-3 rounded-full ${phase.barColor} opacity-30
                                               group-hover:opacity-100 transition-opacity duration-500`}
                                />
                            </div>

                            {/* Content */}
                            <div className="min-w-0">
                                <h3 className={`text-lg font-bold font-zilla ${phase.color} mb-3`}>
                                    {phase.title}
                                </h3>
                                <ul className="space-y-2">
                                    {phase.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 text-sm text-gray-600 font-source leading-relaxed"
                                        >
                                            <span
                                                className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${phase.barColor}`}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
