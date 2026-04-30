import { Brain, Code2, Database, GitBranch, Layout, PenTool, ServerCog, Sparkles } from "lucide-react";

const skillGroups = [
  { category: "Frontend", Icon: Code2, skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"] },
  { category: "UI Systems", Icon: Layout, skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "Component UI"] },
  { category: "Design Handoff", Icon: PenTool, skills: ["Figma", "Prototyping", "Design Specs", "Visual Polish"] },
  { category: "App Logic", Icon: ServerCog, skills: ["Redux Toolkit", "React Router", "Context API", "Keycloak Auth"] },
  { category: "Data and AI", Icon: Brain, skills: ["Python", "Pandas", "NumPy", "Machine Learning", "ML APIs"] },
  { category: "Tools", Icon: GitBranch, skills: ["Git", "GitHub", "VS Code", "Agile", "Microsoft Office"] },
  { category: "Backend Basics", Icon: Database, skills: ["REST APIs", "Node.js", "NestJS", "MySQL"] },
  { category: "Growth", Icon: Sparkles, skills: ["Problem Solving", "Teamwork", "Client Communication", "Fast Learning"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <div className="section-header">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">A modern frontend toolkit with design and AI range.</h2>
          <p className="section-copy">
            Built around React delivery, responsive systems, API-connected features, and a growing machine learning foundation.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map(({ category, Icon, skills }) => (
            <article key={category} className="glass-card hover-lift p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#ff7ab6]/22 to-[#ffb35c]/26 text-[#d94f83]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-black text-[#24121b]">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
