import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',       // Static export ke liye
  images: {
    unoptimized: true,    // 🔥 Yeh line lagana sab se zaroori hai, is se images load hongi!
  },
  trailingSlash: true,    // Routes ke paths ko handle karne ke liye
};

export default nextConfig;