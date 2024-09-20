module.exports = {
    plugins: {
      '@tailwindcss/postcss': {
        base: './app/styles/index.css',
        optimize: { minify: true },
      },
    },
  }
