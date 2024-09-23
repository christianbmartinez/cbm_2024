/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {
      base: `${process.cwd()}`,
      optimize: { minify: true },
    },
    'postcss-rename': {
      strategy: 'minimal',
      by: 'whole',
      prefix: 'cbm-',
      except: [/^.*?hl.*$/, /^.*?dark.*$/, /^.*?light.*$/, /^--.*$/],
      ids: false,
      outputMapCallback: (x) => console.log('Rename callback:', '\n', x),
    },
  },
}
