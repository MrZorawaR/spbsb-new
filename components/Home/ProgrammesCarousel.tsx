"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "../ui/Carousel";

type Programme = {
  title: string;
  image: string;
  href: string;
  alt: string;
};

type Props = {
  programmes: Programme[];
};

export default function ProgrammesCarousel({ programmes }: Props) {


  return (
    <Carousel loop autoplayDelay={3000} showArrows showDots>
      {programmes.map((prog, index) => (
        <Link
          key={`${prog.title}-${index}`}
          href={prog.href}
          className="programme-card group block"
        >
          <div className="relative h-72 md:h-80 rounded-xl overflow-hidden">
            <Image
              src={prog.image}
              alt={prog.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              aria-hidden="true"
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <div className="relative bg-white/90 backdrop-blur-md rounded-xl p-5 shadow-lg border border-white/50 group-hover:border-accent/30 group-hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="w-8 h-1 bg-accent mb-3 rounded-full group-hover:w-12 transition-all duration-300 ease-out" aria-hidden="true" />
                    <h3 className="font-zilla text-lg font-bold text-heading leading-tight group-hover:text-accent transition-colors duration-300">
                      {prog.title}
                    </h3>
                  </div>
                  <div className="text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Carousel>
  );
}
