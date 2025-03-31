import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;

    