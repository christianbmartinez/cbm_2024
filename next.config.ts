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
    ppr: "incremental",
    optimizePackageImports: [
      "next-mdx-remote/rsc",
      "framer-motion",
    ],
    webpackBuildWorker: true,
  },
  transpilePackages: ["next-mdx-remote/rsc"],
  webpack(config, { isServer, dev }) {
    if (!isServer || dev) {
      config.resolve.alias.fs = false
      config.resolve.alias.path = false
    }
    return config
  },
} satisfies NextConfig