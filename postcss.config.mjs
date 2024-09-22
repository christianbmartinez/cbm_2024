import tailwindcss from '@tailwindcss/postcss'
import postcssRename from 'postcss-rename'

const config = {
  plugins: [
    tailwindcss({
      base: './app/globals.css',
      optimize: {
        minify: true,
      },
    }),
    postcssRename({
      strategy: 'minimal',
      by: 'whole',
      prefix: 'cbm-',
      except: [/^hl-.*$/],
      ids: true,
      outputMapCallback: ({ map }) =>
        JSON.parse(JSON.stringify(map)) && console.log('map: ', map),
    }),
  ],
}

export default config
