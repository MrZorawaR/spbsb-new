import Link from "next/link";
import type { NavLink } from "./nav-data";

/**
 * Desktop NavItem — CSS-only dropdown, zero useState.
 *
 * Dropdown visibility is driven entirely by CSS :hover and :focus-within
 * on the parent <li>. This means:
 *   • No re-renders on hover
 *   • Keyboard accessible (Tab focuses the button → :focus-within opens dropdown)
 *   • Screen reader accessible (aria-haspopup, role="menu", role="menuitem")
 *   • SEO: all links are rendered in the HTML as real <a> tags
 */
export default function NavItem({
  label,
  links,
}: {
  label: string;
  links: NavLink[];
}) {
  return (
    <li className="nav-item group relative">
      <button
        className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 relative group-hover:text-accent focus-visible:text-accent"
        aria-haspopup="true"
        aria-expanded="false"
        type="button"
      >
        <span>{label}</span>

        {/* Chevron */}
        <svg
          className="w-3 h-3 opacity-50 transition-transform duration-300 group-hover:rotate-180 group-hover:opacity-100"
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

        {/* Animated underline — pure CSS driven by group-hover */}
        <span
          className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"
          aria-hidden="true"
        />
      </button>

      {/* Dropdown panel — CSS driven, no JS state */}
      <div className="nav-dropdown" role="menu" aria-label={`${label} submenu`}>
        <div className="nav-dropdown-inner">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              className="nav-dropdown-link group/link"
            >
              <span>{link.label}</span>
              {/* Arrow appears on link hover */}
              <svg
                className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover/link:opacity-60 group-hover/link:translate-x-0"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5.5 11L11 5.5M11 5.5H6.5M11 5.5V11" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}
