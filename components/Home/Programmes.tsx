import SectionHeading from "../SectionHeading";
import ProgrammesCarousel from "./ProgrammesCarousel";

const programmes = [
  {
    title: "MBA (2 yr)",
    image: "/images/mba-fulltime.svg",
    href: "/programmes/mba",
    alt: "MBA Full-Time students in a professional classroom discussion",
  },
  {
    title: "MBA with Apprenticeship",
    image: "/images/mba-executive-hca.svg",
    href: "/programmes/mba-executive-hca",
    alt: "MBA-Executive HCA working professionals in an evening lecture",
  },
  {
    title: "PhD",
    image: "/images/mba-executive.svg",
    href: "/programmes/mba-executive",
    alt: "PhD students in a professional classroom discussion",
  },
  {
    title: "Executive Learning Programs",
    image: "/images/mba-executive.svg",
    href: "/programmes/mba-executive",
    alt: "Executive Learning Programs for working professionals",
  },
];

export default function Programmes() {
  return (
    <section className="pt-10 pb-30 bg-warm" aria-labelledby="programmes-heading">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="Academic Programmes" subTitle="Explore our comprehensive range of academic programmes designed to equip you with the knowledge, skills, and experience needed to excel in the dynamic world of business." />

        <ProgrammesCarousel programmes={programmes} />
      </div>
    </section>
  );
}
