"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navSections } from "./header/nav-data";
import NavItem from "./header/NavItem";
import MobileMenu from "./header/MobileMenu";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Performance-optimized scroll: rAF-throttled */
  const ticking = useRef(false);
  const lastScrolled = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const threshold = window.innerHeight * 0.7;
        const isScrolled = window.scrollY > threshold;
        if (isScrolled !== lastScrolled.current) {
          lastScrolled.current = isScrolled;
          setScrolled(isScrolled);
        }
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300"
      role="banner"
      style={{ willChange: "transform" }}
    >
      {/* ─── Row 1: Top Bar (Logo + Utilities) ─── */}
      <div
        className={`w-full transition-all duration-500 ease-in-out ${
          scrolled || mobileOpen
            ? "bg-white shadow-sm border-transparent py-5"
            : "bg-transparent py-7"
        }`}
      >
        <div className="container mx-auto px-6 md:px-20 h-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="SPBSB Home"
          >{
            scrolled || mobileOpen ?
            <Image src="https://geetauniversity.edu.in/uploads/all/1984/SPBSB-Logo.webp"
                        alt="SPBSB Logo" className="h-12 w-auto" width={120} height={120}/ >
                          :
                          <Image src="https://geetauniversity.edu.in/uploads/all/1985/Sp-Bansal-School-of-business.webp"
                        alt="SPBSB Logo" className="h-12 w-auto" width={120} height={120}/ >
          }
          </Link>

          {/* Utility Links */}
          <div
            className={`hidden lg:flex items-center gap-6 font-semibold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-gray-600" : "text-white/90"
            }`}
          >
            <Link
              href="/contact"
              className="hover:text-accent transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/links"
              className="hover:text-accent transition-colors duration-200"
            >
              Important Links
            </Link>
            <Link
              href="https://admissions.geetauniversity.edu.in/"
              className="rounded-full bg-accent px-5 py-2 text-white hover:bg-accent/90 transition-colors shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
              scrolled || mobileOpen
                ? "text-heading hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ─── Row 2: Main Navigation ─── */}
      <div
        className={`w-full transition-all duration-500 ease-in-out hidden lg:block ${
          scrolled ? "bg-heading shadow-lg py-0" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav
            className="flex items-center justify-center h-12"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-1 text-white">
              {navSections.map((section) => (
                <NavItem
                  key={section.label}
                  label={section.label}
                  links={section.links}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ─── Mobile Menu ─── */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 lg:hidden mobile-menu-backdrop">
          <MobileMenu
            sections={navSections}
            onLinkClick={() => setMobileOpen(false)}
          />
        </div>
      )}
    </header>
  );
}