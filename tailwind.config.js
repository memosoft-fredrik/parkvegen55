module.exports = {
  purge: {
    mode:'layers',
    content:['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'berkshire': ['"Berkshire Swash"', 'cursive']
      },
      backgroundImage: theme => ({
        'hero-55': "url('/pixler/55_hero.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
