import SectionHeading from "../SectionHeading";

const stats = [
  { number: "2", label: "IIRF Rankings" },
  { number: "70+", label: "Years of Legacy" },
  { number: "12,000+", label: "Alumni Base" },
  { number: "1:15", label: "Faculty–Student Ratio" },
];

export default function Stats() {
  return (
    <section className="py-10 bg-white" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading with accent underline */}
        <SectionHeading title="SPBSB at a Glance" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200 w-full">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 lg:px-8 text-center flex flex-col items-center justify-center">
              <p className="font-source text-5xl md:text-6xl font-bold text-heading tracking-tight mb-3">
                {stat.number}
              </p>
              <p className="stat-label text-sm font-semibold text-gray-600 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
