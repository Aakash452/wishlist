module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sweetblack: '#383431',
        blue: {
          verylight: '#F7FEFC',
          light: '#E9EFFD',
          cyanlight: '#E5FDF6',
          dark: '#144DD8',
          brand: '#1A3783',
          optional: '#104672'
        },
        cyangreen: '#CCFACD',
        lightpink: '#FBE7E8',
        white: '#FFFFFF',
        lightgray: '#F2F2F2',
        lightred: '#FFE8E8',
        lightgreen: '#DCF5ED',
        darkorange: '#FFEDC0',
        lightorange: '#FFF6E8',
        darkgreen: '#CDFFCD',
        darkwhite: '#FAFAFA',
        lightblue: '#E9EFFF',
        brown: '#745125',
        lightbrown: '#C18431'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}
