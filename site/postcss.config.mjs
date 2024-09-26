// import { writeFile } from 'node:fs/promises'

module.exports = {
  plugins: {
    'tailwind-plugin-postcss': {
      base: `${process.cwd()}`,
      optimize: { minify: true },
    },

    // 'postcss-rename': {
    //   strategy: 'minimal',
    //   by: 'whole',
    //   prefix: 'cbm-',
    //   except: [/^.*?hl.*$/, /^.*?dark.*$/, /^.*?light.*$/, /^--.*$/],
    //   ids: false,
    //   outputMapCallback: async (map) => {
    //     await writeFile(
    //       './.next/static/css/app/class-map.json',
    //       JSON.stringify(map)
    //     )
    //   },
    // },
  },
}
