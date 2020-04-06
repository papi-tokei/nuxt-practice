/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      inset: {
        '-12': '-12px'
      }
    }
  },
  variants: {
    inset: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
