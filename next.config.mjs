import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required when another package-lock.json exists higher in the tree (e.g. user home)
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
