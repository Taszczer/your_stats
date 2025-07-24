import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/steam/:path*",
        destination: "https://api.steampowered.com/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [new URL("https://avatars.steamstatic.com/**")],
  },
};

export default nextConfig;
