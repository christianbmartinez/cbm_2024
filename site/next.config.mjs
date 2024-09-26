/** @type {import('next').NextConfig} */
export default {
  cleanDistDir: true,
  distDir: '.cbm',
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  // basePath: '/app',
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
  generateBuildId: async () => {
    return `cbm_build_${Math.floor(Math.random() * 999999999)}` // cbm_build_123456789
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        fs: false,
        path: false,
      }
    }
    return config
  },
}
