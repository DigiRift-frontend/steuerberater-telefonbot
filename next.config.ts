import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/leistungen",
        destination: "/use-cases",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
