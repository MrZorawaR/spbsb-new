import Link from "next/link";
import type { NavSection } from "./nav-data";

/**
 * MobileMenu — slide-in accordion using native <details>/<summary>.
 *
 * SEO: All links rendered in HTML as real <a> tags.
 * Accessibility: native disclosure widget, keyboard operable, semantic.
 * Performance: no animation library — CSS transitions only.
 */
export default function MobileMenu({
  sections,
  onLinkClick,
}: {
  sections: NavSection[];
  onLinkClick: () => void;
}) {
  return (
    <div className="lg:hidden mobile-menu-backdrop">
      <nav
        className="px-6 py-4 space-y-1 max-h-[calc(100vh-50px)] overflow-y-auto"
        aria-label="Mobile navigation"
      >
        {sections.map((section, idx) => (
          <details
            key={section.label}
            className="group mobile-menu-item"
            style={{ animationDelay: `${idx * 0.06}s` }}
          >
            <summary className="cursor-pointer py-2.5 text-heading font-semibold text-sm list-none flex items-center justify-between rounded-lg px-3 transition-colors duration-200 hover:bg-gray-50 group-open:bg-gray-50">
              <span>{section.label}</span>
              <svg
                className="w-4 h-4 text-gray-400 transition-transform duration-300 group-open:rotate-180"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 4.5L6 7.5L9 4.5" />
              </svg>
            </summary>
            <ul className="pl-3 pb-2 space-y-0.5">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 px-3 text-sm text-gray-600 rounded-lg hover:bg-accent/5 hover:text-accent transition-colors duration-200"
                    onClick={onLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}

        {/* Utility links */}
        <div className="pt-4 mt-4 border-t border-gray-200 space-y-1">
          <Link
            href="/contact"
            className="block py-2.5 px-3 text-sm text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link
            href="/links"
            className="block py-2.5 px-3 text-sm text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Important Links
          </Link>
          <Link
            href="/alumni"
            className="inline-block mt-3 rounded-full bg-accent px-6 py-2.5 text-white text-sm font-semibold hover:bg-accent/85 transition-colors duration-200"
          >
            Alumni Portal
          </Link>
        </div>
      </nav>
    </div>
  );
}
