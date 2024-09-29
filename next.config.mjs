import createMDX from '@next/mdx'
import { withContentlayer } from 'next-contentlayer'

export default withContentlayer(createMDX({
  cleanDistDir: true,
  distDir: '.cbm',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**/*',
      },
    ],
  },
  experimental: {
    mdxRs: {
      jsxRuntime: 'react-jsx',
      jsxImportSource: 'react',
      mdxType: 'gfm'
    },
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  generateBuildId: async () => {
    return `cbm_build_${Math.floor(Math.random() * 999999999)}`
  },
}))


