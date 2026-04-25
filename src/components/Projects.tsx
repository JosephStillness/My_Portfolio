const projects = [
  {
    title: "News Website — Bangladesh",
    category: "Web App",
    description:
      "A fully responsive news portal with article listings, category filtering, and detailed pages. Fetches live data from REST APIs.",
    highlights: [
      "Reusable component architecture",
      "React Router for multi-page navigation",
      "REST API integration for live news",
      "Tailwind CSS responsive design",
    ],
    tech: ["React.js", "React Router", "Tailwind CSS", "REST API"],
    stripClass: "project-strip-indigo",
    dotColor: "#6366f1",
    badgeClass: "project-badge-indigo",
  },
  {
    title: "Australia Housing Price Prediction",
    category: "Data / ML",
    description:
      "Collected and processed Australian housing data. Performed EDA, cleaning, and preprocessing to uncover pricing trends.",
    highlights: [
      "Data collection and organization",
      "Data cleaning and preprocessing",
      "Exploratory data analysis (EDA)",
      "Statistical insight generation",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    stripClass: "project-strip-violet",
    dotColor: "#8b5cf6",
    badgeClass: "project-badge-violet",
  },
  {
    title: "Zero Trust Security Architecture",
    category: "Security",
    description:
      "Studied Zero Trust principles and access control models. Designed and documented a secure system architecture blueprint.",
    highlights: [
      "Zero Trust principle research",
      "Access control model design",
      "Secure system architecture",
      "Threat modeling fundamentals",
    ],
    tech: ["Security Design", "Access Control", "System Architecture"],
    stripClass: "project-strip-cyan",
    dotColor: "#06b6d4",
    badgeClass: "project-badge-cyan",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">

        <div className="section-header">
          <p className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Work</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Capstone <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base max-w-lg mx-auto">
            Academic and personal projects across web development, machine learning, and security.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((proj) => (
            <div key={proj.title} className="project-card flex flex-col rounded-2xl overflow-hidden">
              {/* Gradient top strip */}
              <div className={`h-[3px] w-full ${proj.stripClass}`} />

              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <div className="mb-4">
                  <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${proj.badgeClass}`}>
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base sm:text-lg leading-snug mb-2">{proj.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-5">{proj.description}</p>

                <ul className="space-y-2 flex-1 mb-5">
                  {proj.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-xs sm:text-sm text-slate-400">
                      <span
                        className="mt-[0.35rem] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: proj.dotColor }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {proj.tech.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <a
            href="https://github.com/JosephStillness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-slate-500 hover:text-white text-sm transition-colors group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View more on GitHub
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
