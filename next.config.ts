import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 🚀 Production Fixes for Hostinger Deployment */
  output: 'export',       // Pure project ko static HTML/CSS mein export karega
  images: {
    unoptimized: true,    // Hostinger par public folder ki images crash hone se bachayega
  },
  trailingSlash: true,    // Sub-pages (like /about/) ke routing issues ko solve karega
};

export default nextConfig;