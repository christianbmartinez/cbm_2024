module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      base: `${process.cwd()}/app`,
      optimize: { minify: true },
    },
    'postcss-rename': {
      strategy: 'minimal',
      by: 'whole',
      prefix: 'cbm-',
      except: [/^hl-.*$/],
      ids: true,
      outputMapCallback: ({ map }) =>
        map ??
        (console.log('map: ', map) && process.env.NODE_ENV === 'production'),
    },
  },
}
