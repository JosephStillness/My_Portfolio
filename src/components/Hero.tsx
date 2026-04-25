"use client";

import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "React & Next.js Engineer",
  "AI & ML Enthusiast",
  "Software Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 58);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32);
      } else {
        timeout = setTimeout(() => { setRoleIndex((i) => (i + 1) % roles.length); setTyping(true); }, 100);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-aurora absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full bg-indigo-700/[0.07] blur-[120px]" />
        <div className="animate-aurora absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-violet-700/[0.07] blur-[100px]" style={{ animationDelay: "-6s" }} />
        <div className="animate-aurora absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-cyan-700/[0.04] blur-[80px]" style={{ animationDelay: "-12s" }} />
        {/* Dot grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.1] rounded-full px-4 py-2 text-xs sm:text-sm text-slate-400 mb-8 sm:mb-10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for new opportunities
        </div>

        {/* Main heading */}
        <h1 className="font-bold tracking-tight mb-4 sm:mb-5">
          <span className="block text-slate-400 text-lg sm:text-xl font-normal tracking-widest uppercase mb-2">
            Hello, I&apos;m
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text leading-none">
            Joseph
          </span>
          <span className="block text-slate-300 text-lg sm:text-xl font-light mt-2">
            Mai Tien Dat Tran
          </span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 min-h-[2.25rem]">
          <span className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-indigo-500" />
          <p className="text-base sm:text-xl md:text-2xl text-slate-400 font-mono">
            <span className="text-indigo-300 font-medium">{displayed}</span>
            <span className="animate-pulse text-indigo-400 font-thin">|</span>
          </p>
          <span className="h-px w-6 sm:w-10 bg-gradient-to-l from-transparent to-indigo-500" />
        </div>

        {/* Description */}
        <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          Building polished user interfaces with React & Next.js.
          Expanding into{" "}
          <span className="text-indigo-300 font-medium">Artificial Intelligence</span>{" "}
          at Macquarie University.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12 sm:mb-14">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-sm sm:text-base text-white text-center transition-all duration-200 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 40px rgba(99,102,241,0.5)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,102,241,0.35)")}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-sm sm:text-base text-slate-300 hover:text-white text-center transition-all duration-200 active:scale-95 border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/5"
          >
            Get in Touch
          </a>
        </div>

        {/* Social row */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {[
            {
              label: "GitHub",
              href: "https://github.com/JosephStillness",
              icon: (
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/edricmttd1111/",
              icon: (
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              label: "Email",
              href: "mailto:datcr36@gmail.com",
              icon: (
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              ),
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-500 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-indigo-500/5"
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-700 hover:text-slate-500 transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
