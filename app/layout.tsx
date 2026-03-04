import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amit Kumar | Creative Developer & AI Enthusiast",
  description: "Portfolio of Amit Kumar — Salesforce Architect, COO at Hacker's Unity, and Full Stack Developer.",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-dev-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
