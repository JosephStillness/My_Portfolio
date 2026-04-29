import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://josephtran.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joseph Tran | Frontend Software Engineer",
    template: "%s | Joseph Tran",
  },
  description:
    "Joseph Tran — Frontend Software Engineer based in Sydney, Australia. Specialising in React, Next.js, and TypeScript. Currently pursuing a Master's in AI at Macquarie University.",
  keywords: [
    "Joseph Tran",
    "Mai Tien Dat",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
    "Sydney",
    "Australia",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Joseph (Mai Tien Dat) Tran", url: siteUrl }],
  creator: "Joseph Tran",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Joseph Tran Portfolio",
    title: "Joseph Tran | Frontend Software Engineer",
    description:
      "Frontend Software Engineer based in Sydney, Australia. Building polished interfaces with React & Next.js. Currently pursuing a Master's in AI at Macquarie University.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joseph Tran — Frontend Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Tran | Frontend Software Engineer",
    description:
      "Frontend Software Engineer based in Sydney, Australia. Building polished interfaces with React & Next.js.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joseph Tran",
  alternateName: "Mai Tien Dat Tran",
  url: siteUrl,
  jobTitle: "Frontend Software Engineer",
  worksFor: { "@type": "Organization", name: "Open to opportunities" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Swinburne University" },
    { "@type": "CollegeOrUniversity", name: "Macquarie University" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  sameAs: [
    "https://github.com/JosephStillness",
    "https://www.linkedin.com/in/edricmttd1111/",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Python", "Machine Learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-full bg-[#0a0a0f] text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}
