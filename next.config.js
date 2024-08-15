/** @type {import('next').NextConfig} */
module.exports = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  distDir: ".cbm",
  // compress: false, // come back to this later. Use brotli/gzip middleware to compress
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizeServerReact: true,
    webpackBuildWorker: true,
  },
  transpilePackages: ["next-mdx-remote"],
  webpack(config, { isServer, dev }) {
    if (!isServer || !dev) {
    //   config.resolve.alias.fs = false
    //   config.resolve.alias.path = false
    // }
    Object.assign(config.resolve.alias, {
      fs:false,
      path: false,
      "react/jsx-runtime.js": "preact/compat/jsx-runtime",
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    });
    return config
  }
}
}
