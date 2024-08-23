/** @type {import('next').NextConfig}*/
module.exports = {
  // compress: false, // come back to this later. Use brotli/gzip middleware to compress
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-placeholder.com',
        port: '',
        pathname: '/**',
      },
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
      "react",
      "next-mdx-remote",
    ],
    optimizeServerReact: true,
    webpackBuildWorker: true,
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