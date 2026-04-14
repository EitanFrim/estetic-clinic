import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/estetic-clinic",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
