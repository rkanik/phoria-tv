const colors = require('tailwindcss/colors')
module.exports = {
   purge: [
      './public/**/*.html',
      './src/**/*.vue',
   ],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {},
      fontFamily: {
         sans: ['Proxima Nova Alt', 'sans-serif'],
         serif: ['Proxima Nova Alt', 'sans-serif'],
      },
      colors: {
         transparent: 'transparent',
         current: 'currentColor',

         black: colors.black,
         white: colors.white,
         gray: colors.coolGray,
         red: colors.red,
         yellow: colors.amber,
         green: colors.emerald,
         blue: colors.blue,
         teal: colors.teal,
         cyan: colors.cyan,
         indigo: colors.indigo,
         purple: colors.violet,
         pink: colors.pink,
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
