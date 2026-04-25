const skillGroups = [
  { category: "Frontend", accent: "#6366f1", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"] },
  { category: "UI & Styling", accent: "#8b5cf6", skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "Figma"] },
  { category: "State & Routing", accent: "#a78bfa", skills: ["Redux Toolkit", "React Router", "Context API"] },
  { category: "Backend Basics", accent: "#06b6d4", skills: ["REST APIs", "Node.js", "NestJS", "Keycloak Auth"] },
  { category: "Data & AI", accent: "#38bdf8", skills: ["Python", "Pandas", "NumPy", "Machine Learning", "ML APIs"] },
  { category: "Tools", accent: "#818cf8", skills: ["Git", "GitHub", "MySQL", "VS Code", "Figma", "Agile"] },
];

const softSkills = [
  "Teamwork",
  "Willingness to Learn",
  "Time Management",
  "Cross-cultural Collaboration",
  "Client Communication",
  "Problem Solving",
];

const languages = [
  { name: "Vietnamese", level: "Native", pct: 100, color: "#6366f1" },
  { name: "English", level: "Professional", pct: 85, color: "#8b5cf6" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-muted">
      <div className="section-inner">

        <div className="section-header">
          <p className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Tech skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 sm:mb-16">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card-border rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className="w-1 h-5 rounded-full shrink-0"
                  style={{ background: `linear-gradient(to bottom, ${group.accent}, transparent)` }}
                />
                <h3 className="text-white font-semibold text-sm sm:text-base">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors"
                    style={{
                      background: `${group.accent}12`,
                      borderColor: `${group.accent}30`,
                      color: group.accent,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

          {/* Soft skills */}
          <div className="card-border rounded-2xl p-5 sm:p-6">
            <h3 className="text-white font-bold text-base sm:text-lg mb-5">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {softSkills.map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 bg-white/[0.03] rounded-xl px-3 py-2.5 border border-white/[0.06]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages + Office */}
          <div className="flex flex-col gap-4">
            <div className="card-border rounded-2xl p-5 sm:p-6 flex-1">
              <h3 className="text-white font-bold text-base sm:text-lg mb-5">Languages</h3>
              <div className="space-y-5">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium text-sm">{lang.name}</span>
                      <span className="text-slate-500 text-xs px-2.5 py-0.5 bg-white/5 rounded-full border border-white/8">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${lang.pct}%`,
                          background: `linear-gradient(90deg, ${lang.color}, #38bdf8)`,
                          boxShadow: `0 0 8px ${lang.color}60`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-border rounded-2xl p-5 sm:p-6">
              <h4 className="text-white font-bold text-sm sm:text-base mb-3">Microsoft Office</h4>
              <div className="flex flex-wrap gap-2">
                {["Word", "Excel", "PowerPoint", "Outlook", "Teams"].map((app) => (
                  <span key={app} className="px-3 py-1 bg-white/[0.04] border border-white/8 rounded-lg text-xs text-slate-400">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
