import { ArrowUpRight, Briefcase, Code2, Mail, MapPin, Phone, Send } from "lucide-react";

const contactItems = [
  { label: "Email", value: "datcr36@gmail.com", href: "mailto:datcr36@gmail.com", Icon: Mail },
  { label: "Phone", value: "0435 311 789", href: "tel:+61435311789", Icon: Phone },
  { label: "Location", value: "Fairfield, NSW", href: "https://maps.google.com/?q=Fairfield+NSW", Icon: MapPin },
];

const profileLinks = [
  { label: "GitHub", value: "JosephStillness", href: "https://github.com/JosephStillness", Icon: Code2 },
  { label: "LinkedIn", value: "edricmttd1111", href: "https://www.linkedin.com/in/edricmttd1111/", Icon: Briefcase },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let&apos;s build something polished.</h2>
            <p className="section-copy">
              Open to graduate roles, internships, and frontend collaborations in Sydney or remote teams.
            </p>

            <div className="mt-8 grid gap-3">
              {contactItems.map(({ label, value, href, Icon }) => (
                <a key={label} href={href} className="glass-card-soft hover-lift flex items-center gap-4 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-white/48 text-[#d94f83]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-[#a86b81]">{label}</p>
                    <p className="font-black text-[#321725]">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {profileLinks.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-soft hover-lift flex items-center justify-between gap-4 p-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-[#d94f83]" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="text-xs font-black uppercase text-[#a86b81]">{label}</p>
                      <p className="truncate font-black text-[#321725]">@{value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#9a657b]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <form className="glass-card p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-[#5b2447]">
                Name
                <input
                  className="focus-ring rounded-[18px] border border-white/70 bg-white/45 px-4 py-3 text-base font-semibold text-[#321725] placeholder:text-[#b38a9c] backdrop-blur-xl transition focus:bg-white/70"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm font-black text-[#5b2447]">
                Email
                <input
                  className="focus-ring rounded-[18px] border border-white/70 bg-white/45 px-4 py-3 text-base font-semibold text-[#321725] placeholder:text-[#b38a9c] backdrop-blur-xl transition focus:bg-white/70"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-black text-[#5b2447]">
              Subject
              <input
                className="focus-ring rounded-[18px] border border-white/70 bg-white/45 px-4 py-3 text-base font-semibold text-[#321725] placeholder:text-[#b38a9c] backdrop-blur-xl transition focus:bg-white/70"
                placeholder="Frontend opportunity"
                type="text"
              />
            </label>

            <label className="mt-4 grid gap-2 text-sm font-black text-[#5b2447]">
              Message
              <textarea
                className="focus-ring min-h-36 resize-none rounded-[22px] border border-white/70 bg-white/45 px-4 py-3 text-base font-semibold text-[#321725] placeholder:text-[#b38a9c] backdrop-blur-xl transition focus:bg-white/70"
                placeholder="Tell me a little about the role or project..."
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[#8c6576]">This form is a visual contact surface. Email is the fastest path.</p>
              <a href="mailto:datcr36@gmail.com" className="button-primary focus-ring">
                Send email
                <Send className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
