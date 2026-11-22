import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All current tools run in the visitor's browser, so a static export is
  // sufficient and can be hosted on Cloudflare Pages for free.
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
