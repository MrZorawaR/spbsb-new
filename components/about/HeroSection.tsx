import Scroll from "@/components/Scroll";

export default function HeroSection() {
    return (
        <section className="fixed inset-0 w-full h-[100vh] overflow-hidden z-0" id="about">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src="https://geetauniversity.edu.in/themes/geetau/image/video.webp" 
                alt="SPBSB Campus"
                className="absolute inset-0 w-full h-full object-cover object-center" 
                loading="eager" 
                decoding="sync"
                fetchPriority="high"
            />

            <div className="absolute inset-0 bg-black/55"></div>

            <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
                <div className="max-w-5xl text-white">
                    <h1 className="text-4xl md:text-6xl font-bold font-zilla leading-tight mb-3">
                        About Us
                    </h1>
                    <p className="text-base md:text-lg font-source font- text-white/90 leading-relaxed tracking-wider">
                        School of Commerce and Business Management (SCBM) is a dynamic hub for modern management education. It blends strong academic foundations with technology-driven learning and meaningful industry engagement. The school focuses on nurturing future business leaders equipped with analytical thinking, digital fluency, and ethical decision-making skills needed to succeed in today’s global economy
                    </p>
                </div>
            </div>
            <Scroll />
        </section>
    );
}
