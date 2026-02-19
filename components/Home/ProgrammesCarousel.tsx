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

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg px-5 py-4 shadow-sm">
                <div className="w-10 h-0.5 bg-accent mb-3" aria-hidden="true" />
                <h3 className="font-zilla text-base md:text-lg font-bold text-heading leading-snug whitespace-pre-line">
                  {prog.title}
                </h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Carousel>
  );
}
