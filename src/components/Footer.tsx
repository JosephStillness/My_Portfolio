export default function Footer() {
  return (
    <footer className="flex justify-center px-5 pb-8 sm:px-6 lg:px-8">
      <div className="flex w-fit max-w-full flex-col items-center justify-center gap-3 rounded-[24px] border border-white/70 bg-white/42 px-5 py-5 text-center text-sm font-semibold text-[#8c6576] shadow-[0_18px_50px_rgba(125,65,77,0.1)] backdrop-blur-xl sm:flex-row sm:flex-wrap sm:gap-x-6">
        <p>
          © 2026 <span className="font-black text-[#321725]">Joseph (Mai Tien Dat) Tran</span>. Built with Next.js.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <a className="transition-colors hover:text-[#321725]" href="https://github.com/JosephStillness" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="transition-colors hover:text-[#321725]" href="https://www.linkedin.com/in/edricmttd1111/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="transition-colors hover:text-[#321725]" href="mailto:datcr36@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
