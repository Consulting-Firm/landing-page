import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack's root to this project; a stray lockfile in a parent dir
  // otherwise makes Next infer the wrong workspace root.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
