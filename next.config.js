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
  transpilePackages: ["next-mdx-remote"],
  webpack({config}, {isServer, dev}) {
    const isProd = process.env.NODE_ENV === 'production'
    const { fs, path } = config.resolve.alias

    if (!isServer | dev) {
      return config.resolve.alias = {
        fs: false,
        path: false,
      }
    } else if (isProd) {
      return config.resolve.alias = {
        ...fs,
        ...path,
      }
    } else {
      return config.resolve.alias = {
        fs: require.resolve('fs'),
        path: require.resolve('path')
      }
    }
  }
}

return config