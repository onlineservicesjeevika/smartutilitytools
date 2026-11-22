import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://smartutilitytools.pages.dev"),
  title: "SmartUtilityTools – Free Online Image Tools",
  description: "Compress images, resize photos and prepare signature images for forms, all in one free browser-based app.",
  verification: {
    google: "o2hbs62aSE60ESxSeJUDSGo14WaNu83aO2igMTvJP3Y",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
