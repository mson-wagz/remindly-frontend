import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PORT: process.env.PORT || '3001',
  },
  // Turbopack configuration for Next.js 16+ (replaces webpack config)
  turbopack: {
    // Windows-specific optimizations for file watching
    watchOptions: {
      poll: 1000, // Check for changes every second instead of watching
      aggregateTimeout: 300, // Delay rebuild after the first change
      ignored: /node_modules/,
    },
  },
  // Experimental features that can help with Windows file system issues
  experimental: {
    // Reduce memory usage and file system pressure
    optimizePackageImports: ['@/components', '@/lib'],
  },
};

export default nextConfig;
