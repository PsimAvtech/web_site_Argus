import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arguspsim.com"),
  title: { default: "ARGUS PSIM | Next Generation Platform", template: "%s | ARGUS PSIM" },
  description: "ARGUS unifies security, safety and operational systems in one intelligent PSIM command-and-control platform.",
  keywords: ["ARGUS", "PSIM", "security management", "command and control", "CCTV", "access control"],
  openGraph: {
    title: "ARGUS PSIM | Next Generation Platform",
    description: "One intelligent platform for security, safety and operational systems.",
    type: "website",
    url: "https://arguspsim.com",
    images: [{ url: "/images/screens/01-hero.webp", width: 1920, height: 1080, alt: "ARGUS PSIM" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#05080c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
