/* ─── Navigation data ─── */

export interface NavLink {
  label: string;
  href: string;
}

export interface NavSection {
  label: string;
  links: NavLink[];
}

export const navSections: NavSection[] = [
  {
    label: "About",
    links: [
      { label: "Legacy", href: "/about/legacy" },
      { label: "Vision, Mission & Values", href: "/about/vision" },
      { label: "Chancellor's Message", href: "/about/chancellor" },
      { label: "Advisory Board", href: "/about/advisory-board" },
      { label: "Governing Council", href: "/about/governing-council" },
      { label: "Dean's Message", href: "/about/dean" },
    ],
  },
  {
    label: "Programmes",
    links: [
      { label: "MBA Full-Time (2 Year)", href: "/programmes/mba" },
      { label: "MBA with Apprenticeship", href: "/programmes/mba-apprenticeship" },
      { label: "MBA-Executive HCA", href: "/programmes/mba-executive-hca" },
      { label: "MBA-Executive (Evening)", href: "/programmes/mba-executive" },
      { label: "PhD Programme", href: "/programmes/phd" },
      { label: "Executive Learning", href: "/programmes/executive-learning" },
    ],
  },
  {
    label: "Faculty & Research",
    links: [
      { label: "Core Faculty", href: "/faculty/core" },
      { label: "Visiting & Guest Faculty", href: "/faculty/visiting" },
      { label: "Research", href: "/faculty/research" },
      { label: "Consultancy", href: "/faculty/consultancy" },
    ],
  },
  {
    label: "Student Life",
    links: [
      { label: "Co-curricular Events", href: "/student-life/co-curricular" },
      { label: "Extra-curricular Events", href: "/student-life/extra-curricular" },
      { label: "Cultural Events", href: "/student-life/cultural" },
      { label: "Student Clubs", href: "/student-life/clubs" },
      { label: "Immersion Programs", href: "/student-life/immersion" },
    ],
  },
  {
    label: "Admissions",
    links: [
      { label: "Admission Process", href: "/admissions/process" },
      { label: "Scholarships & Fees", href: "/admissions/scholarships" },
      { label: "Eligibility Criteria", href: "/admissions/eligibility" },
      { label: "Important Dates", href: "/admissions/dates" },
    ],
  },
  {
    label: "Placements",
    links: [
      { label: "Training", href: "/corporate/training" },
      { label: "Leadership Development", href: "/corporate/leadership" },
      { label: "GTH", href: "/corporate/gth" },
      { label: "CFS", href: "/corporate/cfs" },
      { label: "Internships", href: "/corporate/internships" },
      { label: "Placements", href: "/corporate/placements" },
    ],
  },
];
