import type { NextConfig } from 'next'

export default {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/assets/**/*',
      },
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    ppr: true,
    optimizePackageImports: [
      "next-mdx-remote",
    ],
    webpackBuildWorker: true,
    webpackMemoryOptimizations: true,
    optimizeServerReact: true,
    serverMinification: true,
    useLightningcss: true,
    cssChunking: 'loose', 
  },
  transpilePackages: ["next-mdx-remote"],
  webpack(config, { isServer, dev }) {
    if (!isServer || dev) {
      config.resolve.alias.fs = false
      config.resolve.alias.path = false
    }
    return config
  },
} satisfies NextConfig