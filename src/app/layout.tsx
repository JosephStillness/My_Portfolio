import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joseph Tran | Software Engineer",
  description: "Frontend Software Engineer specializing in React, Next.js, and AI. Currently pursuing Master's in AI at Macquarie University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-[#0a0a0f] text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
