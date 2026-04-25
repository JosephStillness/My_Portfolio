const stats = [
  { value: "2+", label: "Years Learning", sub: "Software Engineering" },
  { value: "2", label: "Internships", sub: "React & Next.js" },
  { value: "3", label: "Projects", sub: "Capstone & personal" },
  { value: "3.2", label: "GPA", sub: "Swinburne University" },
];

const tags = ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Python", "ML APIs", "REST APIs", "Node.js"];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          <p className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Turning ideas into{" "}
            <span className="gradient-text">experiences</span>
          </h2>
        </div>

        {/* Two-col layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14 items-start">

          {/* Left — bio (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              I&apos;m a Software Engineer from <span className="text-slate-200">Sydney, Australia</span>, focused on building
              clean, fast, and user-friendly frontend applications. I recently completed my{" "}
              <span className="text-white font-medium">Bachelor of Software Engineering at Swinburne University</span> (GPA 3.2)
              and am currently pursuing a{" "}
              <span className="text-white font-medium">Master&apos;s in Artificial Intelligence at Macquarie University</span>.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Through internships at <span className="text-indigo-300">Navaro Product</span> and{" "}
              <span className="text-violet-300">Cloak Solutions</span>, I&apos;ve worked on real products — building UI
              components from Figma specs, integrating REST APIs, working with ML APIs, and collaborating
              in cross-functional teams using Git/GitHub.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              I&apos;m driven by curiosity and love working at the intersection of design and engineering.
              Bilingual in <span className="text-slate-200">English</span> and{" "}
              <span className="text-slate-200">Vietnamese</span>, I thrive in multicultural team environments.
            </p>

            {/* Tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Right — stat cards (2 cols) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-border rounded-2xl p-5 sm:p-6 text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold mb-1 gradient-text"
                >
                  {s.value}
                </div>
                <div className="text-white text-xs sm:text-sm font-semibold mb-0.5">{s.label}</div>
                <div className="text-slate-600 text-[11px] sm:text-xs leading-tight">{s.sub}</div>
              </div>
            ))}

            {/* Location card */}
            <div className="col-span-2 card-border rounded-2xl p-4 sm:p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-medium">Fairfield, NSW</p>
                <p className="text-slate-500 text-xs">Sydney, Australia · Open to remote</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
