import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack's root to this project; a stray lockfile in a parent dir
  // otherwise makes Next infer the wrong workspace root.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    // The hero logos are first-party SVGs we control. Allow the image optimizer
    // to serve them, sandboxed via CSP so they can't execute scripts.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
