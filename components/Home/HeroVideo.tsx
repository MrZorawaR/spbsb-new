"use client";

import { useState, useEffect } from "react";

/**
 * HeroVideo — tiny client island.
 *
 * Defers video mount until AFTER the window "load" event to ensure:
 *   • Static hero image remains the LCP element
 *   • Video never blocks first paint
 *   • Video fades in smoothly over the static image
 *   • preload="none" prevents any early network requests
 */
export default function HeroVideo() {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mount = () => {
      setReady(true);
      /* Fade in on next frame after mount */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });
    };

    if (document.readyState === "complete") {
      /* Page already loaded (e.g., client-side navigation) */
      mount();
    } else {
      window.addEventListener("load", mount, { once: true });
      return () => window.removeEventListener("load", mount);
    }
  }, []);

  if (!ready) return null;

  return (
    <video
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      src="https://fms-images.b-cdn.net/fmsBackgrounds/fmsBackgroundVideo.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
}
