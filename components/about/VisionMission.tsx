export default function VisionMission() {
    return (
        <section className="bg-cool py-16 px-4" id="vision-mission">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-accent transition-all duration-300 group-hover:w-2" />
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold font-zilla text-heading">Our Vision</h3>
                        </div>
                        <p className="font-source text-gray-600 leading-relaxed text-lg text-justify">
                            “To be a premier, industry-anchored business school that empowers management professionals with
                            technological fluency, conceptual rigour, and strong ethical foundations to drive sustainable
                            business growth.”
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-heading transition-all duration-300 group-hover:w-2" />
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-heading/10 text-heading">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="6" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold font-zilla text-heading">Our Mission</h3>
                        </div>
                        <ul className="space-y-4 font-source text-gray-600 text-lg leading-relaxed list-disc pl-5 text-justify">
                            <li>Design and deliver industry-focused management education blending business fundamentals with digital, analytical, and AI-enabled tools.</li>
                            <li>Nurture ethical leaders with professional integrity, social responsibility, and sustainability-driven strategic thinking.</li>
                            <li>Leverage human intelligence blended with artificial intelligence for agile problem-solving and strategic planning.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
