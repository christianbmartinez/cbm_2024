module.exports = {
    plugins: {
      '@tailwindcss/postcss': {
        base: `${process.cwd()}/app/globals.css`,
        optimize: { minify: true },
      },
    },
  }
  