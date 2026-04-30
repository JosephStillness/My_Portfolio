import { ArrowUpRight, BarChart3, Newspaper, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "News Website - Bangladesh",
    category: "Web app",
    Icon: Newspaper,
    gradient: "from-[#ff7ab6] via-[#ff9f7c] to-[#ffd18c]",
    description:
      "Responsive news portal with article listings, category filtering, detail pages, and REST API powered content.",
    tech: ["React.js", "React Router", "Tailwind CSS", "REST API"],
  },
  {
    title: "Australia Housing Price Prediction",
    category: "Data / ML",
    Icon: BarChart3,
    gradient: "from-[#f9a8d4] via-[#fdba74] to-[#fde68a]",
    description:
      "Data analysis workflow exploring Australian housing trends through collection, cleaning, preprocessing, and EDA.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Zero Trust Security Architecture",
    category: "Security",
    Icon: ShieldCheck,
    gradient: "from-[#fb7185] via-[#f59e0b] to-[#fef3c7]",
    description:
      "Security architecture study documenting Zero Trust principles, access control models, and threat-aware design.",
    tech: ["Security Design", "Access Control", "System Architecture"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="section-header mb-0">
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Dribbble-style project cards with clear technical signal.</h2>
            <p className="section-copy">
              Selected academic and personal work across frontend delivery, applied data, and secure architecture thinking.
            </p>
          </div>

          <a
            href="https://github.com/JosephStillness"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary focus-ring shrink-0"
          >
            View GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map(({ title, category, Icon, gradient, description, tech }) => (
            <article key={title} className="group glass-card hover-lift overflow-hidden p-3">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-[20px] bg-gradient-to-br ${gradient}`}>
                <div className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/34 px-3 py-1.5 text-xs font-black uppercase text-white/95 backdrop-blur-xl">
                  {category}
                </div>
                <div className="absolute inset-x-6 bottom-6 rounded-[22px] border border-white/55 bg-white/38 p-5 backdrop-blur-xl transition duration-300 group-hover:-translate-y-2 group-hover:bg-white/48">
                  <Icon className="h-8 w-8 text-white drop-shadow" aria-hidden="true" />
                  <p className="mt-5 text-2xl font-black leading-tight text-white drop-shadow">{title}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#321725]/0 opacity-0 backdrop-blur-0 transition duration-300 group-hover:bg-[#321725]/22 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#4b2538] shadow-xl">
                    View details
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm leading-7 text-[#765d67]">{description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
