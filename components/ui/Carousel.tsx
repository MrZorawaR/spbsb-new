"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/* ── Public API ────────────────────────────────────── */

export type CarouselProps = {
  children: ReactNode[];
  /** Enable infinite loop (default: true) */
  loop?: boolean;
  /** Autoplay delay in ms. Set to 0 to disable (default: 3000) */
  autoplayDelay?: number;
  /** Show prev / next arrows (default: true) */
  showArrows?: boolean;
  /** Show dot indicators (default: true) */
  showDots?: boolean;
  /** Additional class on the outermost wrapper */
  className?: string;
  /** Lazy-init via IntersectionObserver rootMargin (default: "205px") */
  rootMargin?: string;
};

/* ── Wrapper with IntersectionObserver lazy-init ───── */

export default function Carousel({
  children,
  className = "",
  rootMargin = "205px",
  ...rest
}: CarouselProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={wrapperRef} className={className}>
      {isVisible ? (
        <CarouselInner {...rest}>{children}</CarouselInner>
      ) : (
        /* SSR-safe fallback — static flex row, no JS needed */
        <div className="embla">
          <div className="embla__container">
            {children.map((child, i) => (
              <div className="embla__slide" key={i}>
                {child}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Arrow SVG icons ──────────────────────────────── */

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18L9 12L15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18L15 12L9 6" />
    </svg>
  );
}

/* ── Core carousel logic ──────────────────────────── */

type InnerProps = Omit<CarouselProps, "className" | "rootMargin">;

function CarouselInner({
  children,
  loop = true,
  autoplayDelay = 3000,
  showArrows = true,
  showDots = true,
}: InnerProps) {
  const plugins =
    autoplayDelay > 0
      ? [
          Autoplay({
            delay: autoplayDelay,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]
      : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      align: "start",
      slidesToScroll: 1,
      containScroll:false,
    },
    plugins
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onDotClick = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="carousel-root">
      {/* ── Viewport with overlaid arrows ── */}
      <div className="carousel-viewport">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {children.map((child, i) => (
              <div className="embla__slide" key={i}>
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows positioned over the carousel edges */}
        {showArrows && (
          <>
            <button
              type="button"
              className="carousel-arrow carousel-arrow--prev"
              onClick={scrollPrev}
              disabled={!loop && !canPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              className="carousel-arrow carousel-arrow--next"
              onClick={scrollNext}
              disabled={!loop && !canNext}
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Dots below the carousel */}
      {showDots && scrollSnaps.length > 1 && (
        <div className="carousel-dots" role="tablist" aria-label="Carousel navigation">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Go to slide ${index + 1}`}
              className={`carousel-dot${index === selectedIndex ? " carousel-dot--active" : ""}`}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
