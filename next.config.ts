import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack's root to this project; a stray lockfile in a parent dir
  // otherwise makes Next infer the wrong workspace root.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    // Placeholder project imagery for the hero carousel. Swap for a real CDN
    // (or local imports) once production assets exist.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/seed/**",
      },
    ],
  },
};

export default nextConfig;
