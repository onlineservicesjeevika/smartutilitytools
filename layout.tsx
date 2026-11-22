import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://smartutilitytools.pages.dev"),
  title: {
    default: "SmartUtilityTools – Free Online Image & File Tools",
    template: "%s | SmartUtilityTools"
  },
  description: "Free, simple online image tools. Compress images, resize photos and resize signatures directly in your browser.",
  keywords: ["image compressor", "image resizer", "signature resizer", "free online tools"],
  openGraph: {
    title: "SmartUtilityTools – Free Online Tools",
    description: "Compress images, resize photos and signatures online.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://smartutilitytools.pages.dev"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
