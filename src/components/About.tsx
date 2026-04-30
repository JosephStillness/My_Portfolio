import { CheckCircle2, Globe2, MapPin, Sparkles, Target } from "lucide-react";

const stack = ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Python", "REST APIs", "Node.js", "Figma"];

const strengths = [
  "Translate Figma designs into responsive, accessible React interfaces.",
  "Connect frontend screens to REST APIs and dynamic product data.",
  "Work comfortably with GitHub, backend developers, and client-facing feedback.",
  "Bring English and Vietnamese communication to multicultural teams.",
];

const profileDetails = [
  { label: "Based in", value: "Fairfield, NSW", Icon: MapPin },
  { label: "Direction", value: "Frontend + AI", Icon: Target },
  { label: "Languages", value: "English, Vietnamese", Icon: Globe2 },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <div className="section-header">
          <p className="eyebrow">About me</p>
          <h2 className="section-title">A clean interface builder with an AI learning path.</h2>
          <p className="section-copy">
            I care about frontend work that feels calm, responsive, and intentional, the kind of UI that makes a product feel
            more trustworthy the longer someone uses it.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="glass-card hover-lift p-6">
            <div className="flex items-center gap-5">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[28px] bg-gradient-to-br from-[#f05f98] via-[#ff8f70] to-[#ffb35c] text-3xl font-black text-white shadow-xl shadow-rose-300/40">
                JT
              </div>
              <div>
                <p className="text-sm font-black uppercase text-[#d94f83]">Joseph Tran</p>
                <p className="mt-2 text-xl font-black leading-tight text-[#24121b]">Software Engineering graduate</p>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              {profileDetails.map(({ label, value, Icon }) => (
                <div key={label} className="glass-card-soft flex items-center gap-3 p-4 shadow-none">
                  <Icon className="h-5 w-5 text-[#f05f98]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-black uppercase text-[#a86b81]">{label}</p>
                    <p className="font-black text-[#321725]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="glass-card p-6 sm:p-8">
            <div className="grid gap-5 text-base leading-8 text-[#765d67]">
              <p>
                I recently completed a Bachelor of Software Engineering at Swinburne University and I am now studying a
                Master of Artificial Intelligence at Macquarie University.
              </p>
              <p>
                My internship experience includes frontend delivery at Navaro Product and Cloak Solutions: building Next.js
                screens, React features, Figma-based components, REST API integrations, Keycloak authentication, and ML API
                experiments.
              </p>
              <p>
                My best work sits at the intersection of design and engineering: turning requirements into refined interfaces
                that are easy to scan, easy to maintain, and comfortable on every screen size.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="glass-card-soft hover-lift flex items-start gap-3 p-4 shadow-none">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#f05f98]" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-[#6f4558]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-[24px] bg-gradient-to-r from-[#ff7ab6]/18 via-white/34 to-[#ffb35c]/22 p-5">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#d94f83]" aria-hidden="true" />
                <p className="font-black text-[#321725]">Current focus</p>
              </div>
              <p className="mt-2 text-sm leading-7 text-[#765d67]">
                Strengthening AI fundamentals while continuing to build polished React and Next.js user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
