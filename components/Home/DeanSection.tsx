import Image from "next/image";
import SectionHeading from "../SectionHeading";

export default function DeanSection() {
  return (
    <section className="relative overflow-hidden py-10 bg-cool">
      <div
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"
        aria-hidden="true"
      />

      <SectionHeading title="Dean's Message"/>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="md:col-span-9 space-y-8 order-2 md:order-1">
            <blockquote className="relative">
              <p className="font-zilla text-xl md:text-2xl text-gray-700 italic leading-snug">
                "I am pleased to welcome you to the School of Commerce &amp;
                Business Management at Geeta University."
              </p>
            </blockquote>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-source">
              <p className="text-justify">
                Our programs are designed to offer a strong academic foundation
                along with practical exposure in key areas such as finance,
                marketing, entrepreneurship, and management, enabling students
                to meet industry demands with confidence. With the guidance of
                experienced faculty, strong industry collaborations, and
                dedicated placement support, we ensure holistic development and
                career readiness. We look forward to being a part of your
                journey toward professional excellence.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 relative group order-1 md:order-2 mx-auto md:mx-0 w-full max-w-[280px] md:max-w-none">
            <div className="hidden md:block absolute -inset-4 border-2 border-heading/10 rounded-[40px] rotate-3 transition-transform duration-500 group-hover:rotate-0" />

            <div className="relative h-[280px] md:h-[340px] w-full z-10 overflow-hidden rounded-[24px] md:rounded-[32px] shadow-2xl bg-white">
              <Image
                src="https://geetauniversity.edu.in/uploads/all/1983/indira.webp"
                alt="Dr. Indira Bhardwaj"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-heading/95 via-heading/50 to-transparent pt-16">
                <h3 className="text-white text-xl font-bold leading-tight font-zilla">
                  Dr. Indira Bhardwaj
                </h3>
                <p className="text-accent text-sm font-bold mt-1">
                  Dean, SPBSB
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 hidden md:block z-20">
              <svg
                className="w-24 h-24 text-accent/10"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.01166 16 9.01166 15.9999 9.01166 15.9999C9.01166 13.9238 10.3242 12.1645 12.1648 11.4589C12.7239 11.2446 13.0121 10.6234 12.7978 10.0643C12.5835 9.50523 11.9623 9.217 11.4032 9.43134C8.61864 10.4988 6.64936 13.1492 6.61198 16.2736L6.6118 21C6.6118 22.1046 7.50723 23 8.6118 23H12.017C13.1216 23 14.017 22.1046 14.017 21Z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
