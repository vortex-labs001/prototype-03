import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    // local images in /public are served automatically
    unoptimized: false,
  },
};

export default nextConfig;
