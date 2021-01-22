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
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
