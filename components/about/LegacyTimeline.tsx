import SectionHeading from "@/components/SectionHeading";
import { timelineEvents } from "@/data/about";

export default function LegacyTimeline() {
    return (
        <section className="bg-white py-16 px-4 text-gray-800 relative z-0" id="legacy">
            <style dangerouslySetInnerHTML={{__html: `
                .timeline-container::after {
                    content: '';
                    position: absolute;
                    width: 4px;
                    background: linear-gradient(to bottom, #88a6bb, #06355f);
                    top: 10px;
                    bottom: 10px;
                    left: 50%;
                    margin-left: -1.5px;
                    border-radius: 3px;
                    z-index: 1;
                }
                .timeline-item::after {
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background-color: #06355f;
                    top: 30px;
                    border-radius: 50%;
                    z-index: 3;
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .item-left::after { right: -10px; }
                .item-right::after { left: -10px; }
                .timeline-content {
                    background: rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    box-shadow: 0 4px 16px 0 rgba(10, 45, 75, 0.1);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .timeline-item:hover .timeline-content {
                    transform: translateY(-4px) scale(1.01);
                    box-shadow: 0 8px 20px 0 rgba(10, 45, 75, 0.2);
                }
                .timeline-item:hover::after {
                    transform: scale(1.1);
                    box-shadow: 0 0 0 4px rgba(10, 45, 75, 0.2);
                }
                .year-text {
                    background: -webkit-linear-gradient(#06355f, #88a6bb);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .events-list li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: #06355f;
                    font-weight: 700;
                    font-size: 1.1em;
                }
                @media screen and (max-width: 768px) {
                    .timeline-container::after { left: 20px; }
                    .timeline-item { width: 100% !important; padding-left: 60px !important; padding-right: 15px !important; left: 0 !important; }
                    .item-left, .item-right { text-align: left !important; }
                    .timeline-item::after { left: 10px !important; right: auto !important; }
                }
            `}} />
            <div className="container max-w-6xl mx-auto relative z-10">
                <SectionHeading 
                    title="Our Legacy" 
                    subTitle="Geeta Group of Institutions, which provides quality education across diverse levels and fields, initiated its journey in 1985. Today, it has become an educational hub operating many schools, colleges and even an esteemed University under its aegis. The group is committed to shaping countless futures, ensuring holistic student development for the past four decades." 
                />

                <div className="timeline-container relative max-w-[1000px] mx-auto pb-10 mt-8">
                    {timelineEvents.map((item, idx) => (
                        <div key={idx} className={`timeline-item ${item.align === 'left' ? 'item-left left-0 pr-20 pl-2' : 'item-right left-1/2 pl-20 pr-2'} p-[3px_8px] relative w-1/2 z-[2]`}>
                            <div className="timeline-content p-[18px_25px] rounded-xl relative text-left">
                                <div className="year-text text-[2.2rem] font-bold mb-[8px] font-source">{item.year}</div>
                                <ul className="events-list font-source text-[1.1rem] text-[#3b4256] leading-[1.6] list-none p-0 m-0">
                                    {item.text.map((t, i) => (
                                        <li key={i} className="relative pl-[22px] mb-1">{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
