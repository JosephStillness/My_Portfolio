const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Navaro Product",
    period: "Oct 2025 – Dec 2025",
    color: "indigo",
    accent: "#6366f1",
    points: [
      "Developed and maintained user interfaces using Next.js",
      "Implemented UI components from Figma design specifications",
      "Integrated REST APIs to display dynamic data on the frontend",
      "Fixed UI bugs and improved website responsiveness across devices",
      "Collaborated with backend developers using Git/GitHub",
    ],
    tech: ["Next.js", "React", "Figma", "REST API", "Git"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Cloak Solutions",
    period: "Mar 2025 – Jul 2025",
    color: "violet",
    accent: "#8b5cf6",
    points: [
      "Designed UI mockups and prototypes using Figma",
      "Developed frontend features using ReactJS",
      "Worked on basic ML tasks and integrated ML APIs",
      "Implemented Keycloak authentication for user access management",
      "Participated in client-facing meetings and demos",
    ],
    tech: ["React.js", "Figma", "ML APIs", "Keycloak", "Python"],
  },
];

const educations = [
  {
    degree: "Master of Artificial Intelligence",
    school: "Macquarie University",
    period: "2026 – Present",
    gpa: null,
    desc: "Deep learning, machine learning systems, and AI architecture.",
    accent: "#06b6d4",
  },
  {
    degree: "Bachelor of Software Engineering",
    school: "Swinburne University",
    period: "2022 – 2025",
    gpa: "3.2",
    desc: "Software design, web development, algorithms, and capstone projects.",
    accent: "#6366f1",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell section-muted">
      <div className="section-inner">

        <div className="section-header">
          <p className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Journey</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-14 sm:mb-20">
          {/* Vertical line */}
          <div className="absolute left-[0.4rem] sm:left-[0.45rem] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative pl-8 sm:pl-10">
                {/* Dot */}
                <div
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full ring-4 shrink-0"
                  style={{
                    backgroundColor: exp.accent,
                    boxShadow: `0 0 0 4px ${exp.accent}25, 0 0 14px ${exp.accent}60`,
                  }}
                />

                {/* Card */}
                <div className="card-border rounded-2xl p-5 sm:p-7">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-base sm:text-lg">{exp.role}</h3>
                      <p className="text-slate-400 text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <span
                      className="shrink-0 px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${exp.accent}18`,
                        border: `1px solid ${exp.accent}40`,
                        color: exp.accent,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2 mb-5">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-xs sm:text-sm text-slate-400">
                        <span
                          className="mt-[0.35rem] w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: exp.accent }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {exp.tech.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-white font-bold text-lg sm:text-xl mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            Education
            <span className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {educations.map((edu) => (
              <div
                key={edu.school}
                className="card-border rounded-2xl p-5 sm:p-6 flex gap-4"
              >
                <div
                  className="mt-1 w-1 rounded-full shrink-0 self-stretch min-h-[3rem]"
                  style={{ background: `linear-gradient(to bottom, ${edu.accent}, transparent)` }}
                />
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base leading-snug">{edu.degree}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-0.5">{edu.school}</p>
                  <p className="text-slate-600 text-xs mt-1">
                    {edu.period}{edu.gpa && ` · GPA ${edu.gpa}`}
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2.5 leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
