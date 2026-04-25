const socialLinks = [
  {
    label: "GitHub",
    value: "JosephStillness",
    href: "https://github.com/JosephStillness",
    accent: "#6366f1",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "edricmttd1111",
    href: "https://www.linkedin.com/in/edricmttd1111/",
    accent: "#0ea5e9",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const directContacts = [
  { label: "Email", value: "datcr36@gmail.com", href: "mailto:datcr36@gmail.com" },
  { label: "Phone", value: "0435 311 789", href: "tel:+61435311789" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-inner section-narrow">

        {/* Hero CTA banner */}
        <div
          className="relative rounded-3xl overflow-hidden mb-8 p-8 sm:p-12 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08), rgba(6,182,212,0.06))",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-8">
              Open to graduate roles, internships, and collaborations in Sydney or remote.
            </p>
            <a
              href="mailto:datcr36@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-white text-sm transition-all duration-200 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
              }}
            >
              Send a message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-border rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition-all active:scale-[0.98]"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                style={{ background: `${link.accent}18`, border: `1px solid ${link.accent}35`, color: link.accent }}
              >
                {link.icon}
              </div>
              <div className="min-w-0">
                <p className="text-slate-500 text-xs">{link.label}</p>
                <p className="text-white text-xs sm:text-sm font-medium truncate">@{link.value}</p>
              </div>
              <svg className="w-4 h-4 text-slate-700 group-hover:text-indigo-400 shrink-0 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          ))}
        </div>

        {/* Direct contacts */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {directContacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex items-center justify-between bg-white/[0.02] border border-white/[0.06] hover:border-white/10 rounded-2xl px-4 sm:px-5 py-3.5 transition-all active:scale-[0.98]"
            >
              <div>
                <p className="text-slate-600 text-xs">{c.label}</p>
                <p className="text-white text-xs sm:text-sm font-medium">{c.value}</p>
              </div>
              <svg className="w-4 h-4 text-slate-700 group-hover:text-slate-400 shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          ))}
        </div>

        <p className="text-center text-slate-700 text-xs mt-8">
          Based in <span className="text-slate-500">Fairfield, NSW 2165</span> · Open to remote & Sydney roles
        </p>

      </div>
    </section>
  );
}
