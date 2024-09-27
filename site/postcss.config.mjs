export default {
  plugins: {
    '@tailwindcss/postcss': {
      base: `${process.cwd()}`,
      optimize: { minify: true },
    },
  },
}
