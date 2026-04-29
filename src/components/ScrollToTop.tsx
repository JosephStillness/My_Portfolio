"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 active:scale-90"
      style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))",
        border: "1px solid rgba(99,102,241,0.3)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(99,102,241,0.2)",
      }}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75 12 8.25l7.5 7.5" />
      </svg>
    </button>
  );
}
