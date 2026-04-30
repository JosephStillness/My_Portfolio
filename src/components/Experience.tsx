import { Briefcase, CalendarDays, CheckCircle2, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "Experience",
    title: "Frontend Developer Intern",
    place: "Navaro Product",
    period: "Oct 2025 - Dec 2025",
    Icon: Briefcase,
    points: [
      "Developed and maintained user interfaces using Next.js.",
      "Implemented UI components from Figma specifications.",
      "Integrated REST APIs and improved responsive UI behavior.",
    ],
    tech: ["Next.js", "React", "Figma", "REST API", "Git"],
  },
  {
    type: "Experience",
    title: "Frontend Developer Intern",
    place: "Cloak Solutions",
    period: "Mar 2025 - Jul 2025",
    Icon: Briefcase,
    points: [
      "Built React.js frontend features and design prototypes.",
      "Integrated ML APIs and supported Keycloak authentication work.",
      "Participated in client-facing meetings and demos.",
    ],
    tech: ["React.js", "Figma", "ML APIs", "Keycloak", "Python"],
  },
  {
    type: "Education",
    title: "Master of Artificial Intelligence",
    place: "Macquarie University",
    period: "2026 - Present",
    Icon: GraduationCap,
    points: ["Deep learning, machine learning systems, and AI architecture."],
    tech: ["AI", "Machine Learning", "Deep Learning"],
  },
  {
    type: "Education",
    title: "Bachelor of Software Engineering",
    place: "Swinburne University",
    period: "2022 - 2025",
    Icon: GraduationCap,
    points: ["Software design, web development, algorithms, and capstone projects. GPA 3.2."],
    tech: ["Software Engineering", "Web Development", "Algorithms"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <div className="section-header">
          <p className="eyebrow">Timeline</p>
          <h2 className="section-title">Experience and education with a clean progression.</h2>
          <p className="section-copy">
            A focused timeline of internships, product work, and academic foundations that support my frontend and AI path.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-6">
            {timeline.map(({ type, title, place, period, Icon, points, tech }) => (
              <article key={`${title}-${place}`} className="relative">
                <div className="relative z-10 rounded-[24px] border border-white/75 bg-white/64 p-5 shadow-[0_24px_70px_rgba(125,65,77,0.13)] backdrop-blur-2xl transition duration-200 hover:-translate-y-1 hover:border-[#ff7ab6]/45 hover:shadow-[0_28px_80px_rgba(226,84,127,0.18)] sm:p-7">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] border border-white/80 bg-white/70 text-[#d94f83] shadow-lg shadow-rose-200/35 backdrop-blur-xl">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-black uppercase text-[#d94f83]">{type}</p>
                        <h3 className="mt-2 max-w-full break-words text-[clamp(1.65rem,3vw,2.45rem)] font-black leading-tight text-[#24121b]">
                          {title}
                        </h3>
                        <p className="mt-2 text-lg font-black text-[#7f6670]">{place}</p>
                      </div>
                    </div>

                    <div className="inline-flex w-fit max-w-full shrink-0 items-center gap-2 rounded-full border border-white/80 bg-white/58 px-4 py-2 text-sm font-black text-[#6f4558] shadow-sm backdrop-blur-xl">
                      <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="whitespace-nowrap">{period}</span>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {points.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-[18px] bg-white/35 px-4 py-3 text-sm font-semibold leading-6 text-[#765d67] backdrop-blur-xl">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d94f83]" aria-hidden="true" />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}
