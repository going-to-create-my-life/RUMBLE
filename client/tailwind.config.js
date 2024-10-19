module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      lora : 'Lora',
      galindo : 'Galindo'
    },
    extend: {
      backgroundImage:{
        'custom-bg': "url('/public/images/intro.png')",
        'custom2-bg': "url('/public/images/background.png')"
      },
      colors: {
        primary: '#1d4ed8', // Blue
        secondary: '#0f172a', // Darker blue/black like chess.com
      },
    },
  },
  plugins: [],
}

