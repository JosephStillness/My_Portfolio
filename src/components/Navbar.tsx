"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-full max-w-6xl -translate-x-1/2 px-4 sm:px-6">
      <div className="relative grid h-14 w-full grid-cols-[1fr_auto_1fr] items-center">
        <a
          href="#"
          className={`focus-ring group absolute left-1/2 top-0 z-10 flex h-14 -translate-x-1/2 items-center gap-3 rounded-full border py-2 pl-2 pr-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.58)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(226,84,127,0.16)] sm:pr-5 xl:static xl:col-start-1 xl:justify-self-start xl:translate-x-0 ${
            scrolled || open
              ? "border-white/76 bg-white/68 shadow-[0_16px_48px_rgba(125,65,77,0.14)]"
              : "border-white/60 bg-white/46"
          }`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f05f98] via-[#ff8f70] to-[#ffb35c] text-sm font-black text-white shadow-lg shadow-rose-300/40 transition-transform duration-200 group-hover:scale-105">
            JT
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black text-[#321725]">Joseph Tran</span>
            <span className="block text-xs font-semibold text-[#8c6576]">Software Developer</span>
          </span>
        </a>

        <ul
          className={`hidden h-12 items-center gap-1 rounded-full border px-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-2xl transition-all duration-300 xl:col-start-2 xl:flex xl:justify-self-center ${
            scrolled
              ? "border-white/75 bg-white/64 shadow-[0_16px_44px_rgba(125,65,77,0.12)]"
              : "border-white/55 bg-white/38"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring inline-flex h-9 min-w-[5rem] items-center justify-center rounded-full px-3.5 text-sm font-extrabold text-[#6f4558] transition-all duration-200 hover:bg-white/72 hover:text-[#2e1421] hover:shadow-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 xl:col-start-3 xl:flex xl:justify-self-end">
          <a href="mailto:datcr36@gmail.com" className="button-secondary focus-ring min-h-12 px-4 py-2 text-sm">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
          <a
            href="https://github.com/JosephStillness"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary focus-ring min-h-12 px-5 py-2 text-sm"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className={`focus-ring col-start-3 inline-flex h-12 w-12 items-center justify-center justify-self-end rounded-full border text-[#4b2538] shadow-[inset_0_1px_0_rgba(255,255,255,0.58)] backdrop-blur-2xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/72 xl:hidden ${
            open ? "border-white/76 bg-white/70 shadow-[0_16px_42px_rgba(125,65,77,0.14)]" : "border-white/62 bg-white/46"
          }`}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 grid max-w-6xl gap-2 rounded-[24px] border border-white/70 bg-white/76 p-3 shadow-[0_18px_50px_rgba(125,65,77,0.14)] backdrop-blur-2xl xl:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-3 text-sm font-black text-[#5d3147] transition-colors hover:bg-white/70"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-1 grid grid-cols-2 gap-2 border-t border-white/60 pt-3">
            <a href="mailto:datcr36@gmail.com" className="button-secondary focus-ring min-h-11 px-4 py-2 text-sm">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
            <a
              href="https://github.com/JosephStillness"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary focus-ring min-h-11 px-4 py-2 text-sm"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
