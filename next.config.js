/** @type {import('next').NextConfig} */
module.exports = {
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
    optimizePackageImports: [
      "next-mdx-remote",
    ],
    webpackBuildWorker: true,
    optimizeServerReact: true,
    serverMinification: true,
  },
  transpilePackages: ["next-mdx-remote"],
  webpack(config, { isServer, dev }) {
    if (!isServer || dev) {
      config.resolve.alias.fs = false
      config.resolve.alias.path = false
    }
    return config
  },
} 