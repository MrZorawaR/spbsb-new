import SectionHeading from "@/components/SectionHeading";
import { recognitions } from "@/data/about";

export default function Recognitions() {
    return (
        <section id="recognitions" className="bg-cool py-14 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeading 
                    title="Recognitions & Approvals" 
                    subTitle="SPBSB is recognised and approved by leading statutory and professional bodies, ensuring academic credibility and excellence." 
                />

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-stretch" role="list">
                    {recognitions.map((item, idx) => (
                        <li key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center p-6 text-center group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                                src={item.src}
                                alt={item.alt}
                                width="120" 
                                height="120" 
                                className="h-20 w-auto object-contain transition-transform group-hover:scale-105" 
                                loading="lazy" 
                                decoding="async"
                            />
                            <span className="mt-4 font-semibold font-source text-heading">
                                {item.label}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
