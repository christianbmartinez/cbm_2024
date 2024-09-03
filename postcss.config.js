module.exports = {
    plugins: {
      '@tailwindcss/postcss': {
        base: `${process.cwd()}/styles/index.css`,
        optimize: { minify: true },
      },
    },
  }
  