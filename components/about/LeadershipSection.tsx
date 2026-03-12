import SectionHeading from "@/components/SectionHeading";
import LeadershipCard from "@/components/LeadershipCard";
import { leaders } from "@/data/about";

export default function LeadershipSection() {
    return (
        <section className="py-20 px-4 relative overflow-hidden bg-cool" id="leadership">
            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeading title="Leadership" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start mt-8">
                    {leaders.map((leader, idx) => (
                        <LeadershipCard key={idx} leader={leader} />
                    ))}
                </div>
            </div>
        </section>
    );
}
