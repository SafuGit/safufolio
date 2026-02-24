import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stepnextgenai.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
