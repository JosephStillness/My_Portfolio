import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const highlights = ["React", "Next.js", "TypeScript", "AI"];

const links = [
  { label: "GitHub", href: "https://github.com/JosephStillness", Icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/edricmttd1111/", Icon: Briefcase },
  { label: "Email", href: "mailto:datcr36@gmail.com", Icon: Mail },
];

export default function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden">
      <div className="pointer-events-none absolute left-[8%] top-28 h-52 w-[72%] -rotate-6 rounded-[32px] bg-gradient-to-r from-[#ffd5e8]/70 via-[#ffe2c4]/70 to-[#fff8ee]/70 blur-xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-44 h-72 w-80 rotate-12 rounded-[36px] bg-gradient-to-br from-[#ff8f70]/18 to-[#ff7ab6]/18 blur-2xl" />

      <div className="section-inner relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/48 px-4 py-2 text-sm font-bold text-[#734257] shadow-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#f05f98]" aria-hidden="true" />
              Open to graduate roles, internships, and remote work
            </div>

            <p className="eyebrow">Frontend Software Developer</p>
            <h1 className="mt-4 max-w-4xl text-[clamp(3.7rem,14vw,8.2rem)] font-black leading-[0.88] text-[#24121b]">
              Joseph <span className="gradient-text">Tran</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-[#3e2531] sm:text-2xl sm:leading-10">
              I craft polished, responsive web experiences with a product mindset and a growing AI foundation.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#7f6670] sm:text-lg">
              Sydney-based software engineering graduate, currently studying a Master of Artificial Intelligence at
              Macquarie University.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {highlights.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="button-primary focus-ring">
                Explore projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="button-secondary focus-ring">
                Contact me
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {links.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-black text-[#7a4c60] transition hover:text-[#2b1420]"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                  {href.startsWith("http") && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
                </a>
              ))}
            </div>
          </div>

          <aside className="glass-card hover-lift relative overflow-hidden p-5 sm:p-6">
            <div className="absolute right-[-4rem] top-[-3rem] h-32 w-52 rotate-12 rounded-[28px] bg-gradient-to-br from-[#ff7ab6]/20 to-[#ffb35c]/20 blur-xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-black uppercase text-[#d94f83]">Profile card</p>
                  <h2 className="mt-3 text-2xl font-black leading-tight text-[#24121b]">Software developer with frontend depth.</h2>
                </div>
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#f05f98] via-[#ff8f70] to-[#ffb35c] text-2xl font-black text-white shadow-xl shadow-rose-300/40">
                  JT
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                {[
                  { text: "Fairfield, NSW - open to Sydney and remote", Icon: MapPin },
                  { text: "Bachelor of Software Engineering, Swinburne", Icon: GraduationCap },
                  { text: "Master of Artificial Intelligence, Macquarie", Icon: Sparkles },
                  { text: "Frontend internships at Navaro Product and Cloak Solutions", Icon: Briefcase },
                ].map(({ text, Icon }) => (
                  <div key={text} className="glass-card-soft flex items-center gap-3 rounded-[18px] px-4 py-3 text-sm font-semibold leading-6 text-[#6f4558] shadow-none">
                    <Icon className="h-4 w-4 shrink-0 text-[#f05f98]" aria-hidden="true" />
                    {text}
                  </div>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { value: "2", label: "Internships" },
                  { value: "3", label: "Projects" },
                  { value: "3.2", label: "GPA" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[20px] border border-white/65 bg-white/42 p-4 text-center backdrop-blur-xl">
                    <p className="text-3xl font-black text-[#24121b]">{stat.value}</p>
                    <p className="mt-1 text-xs font-black uppercase text-[#9a657b]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
