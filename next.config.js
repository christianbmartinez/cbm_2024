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
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  transpilePackages: ['next-mdx-remote'],
  webpack: (config, { isServer, dev }) => {
    if (!isServer | dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        fs: false,
        path: false,
      }

      return config
    }
  },
}
