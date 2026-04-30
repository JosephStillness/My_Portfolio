import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joseph Tran | Software Developer Portfolio",
  description:
    "Modern portfolio of Joseph Tran, a Sydney-based software developer focused on React, Next.js, polished interfaces, and applied AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
