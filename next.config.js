/** @type {import('next').NextConfig} */
module.exports = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  distDir: ".cbm",
  experimental: {
    optimizePackageImports: [
      "react",
      "react-dom",
      "next-mdx-remote",
      "next-themes",
      "sharp",
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
