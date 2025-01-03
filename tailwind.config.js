module.exports = {
  content:['./public/*.html'],
  
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
