export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-8 px-5 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/10 via-transparent to-violet-950/10 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700 text-center sm:text-left">
        <p>© 2025 <span className="text-slate-500">Joseph (Mai Tien Dat) Tran</span>. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/JosephStillness" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">GitHub</a>
          <span className="w-px h-3 bg-white/10" />
          <a href="https://www.linkedin.com/in/edricmttd1111/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">LinkedIn</a>
          <span className="w-px h-3 bg-white/10" />
          <a href="mailto:datcr36@gmail.com" className="hover:text-slate-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
