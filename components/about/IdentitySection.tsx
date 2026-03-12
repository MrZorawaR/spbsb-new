import SectionHeading from "@/components/SectionHeading";

export default function IdentitySection() {
    return (
        <section className="bg-warm py-16" id="identity">
            <div className="max-w-7xl mx-auto px-8">
                <SectionHeading 
                    title="OUR IDENTITY: ROOTED IN LEGACY, SHAPING THE FUTURE" 
                    subTitle="At SPBSB, we offer a combination of a bold futuristic vision and the wisdom of the past. Our integration of innovation, technology, and global academic standards helps carry forward the legacy of India’s rich educational heritage." 
                />

                <div className="relative mb-14 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-visible md:overflow-hidden shadow-2xl relative z-0">
                        <div className="bg-accent text-white p-8 md:p-10 pb-20 md:pb-10 md:pr-24 flex items-center justify-center md:justify-start relative min-h-[220px] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                            <div className="max-w-md relative z-10">
                                <p className="font-source text-lg leading-relaxed text-center md:text-left">
                                    <span className="font-bold font-zilla text-2xl block mb-2">Saffron</span>
                                    symbolizes the timeless knowledge of Indian saints — a nod to our deep-rooted cultural legacy.
                                </p>
                            </div>
                        </div>
                        <div className="bg-heading text-white p-8 md:p-10 pt-20 md:pt-10 md:pl-24 flex items-center justify-center md:justify-end relative min-h-[220px] rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
                            <div className="max-w-md relative z-10">
                                <p className="font-source text-lg leading-relaxed text-center md:text-right">
                                    <span className="font-bold font-zilla text-2xl block mb-2">Blue</span>
                                    represents the future — driven by technology, openness, and the pursuit of academic excellence.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="bg-white rounded-full w-44 h-44 md:w-56 md:h-56 flex items-center justify-center shadow-2xl border-8 border-warm">
                            <div className="text-center px-6 md:px-10">
                                <p className="font-source text-heading font-bold text-sm md:text-lg leading-tight uppercase tracking-wide">
                                    Our theme colours reflect this philosophy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-10 md:p-12 rounded-3xl shadow-xl border border-white">
                    <p className="font-source text-lg text-gray-700 leading-relaxed text-justify md:text-center">
                        Our crest stands for courage, ambition, and transformation. It reflects Geeta University&apos;s
                        commitment to being more than an institution. It presents Geeta University as a hub of knowledge
                        where the future is imagined, nurtured, and realised. Here, students are not just prepared for the
                        future — they learn to shape it.
                    </p>
                </div>
            </div>
        </section>
    );
}
